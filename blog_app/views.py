from django.conf import settings
from django.shortcuts import get_object_or_404
from django.views.generic.edit import FormMixin
from django.views.generic.list import ListView
from django.views.generic.detail import DetailView
from django.views.generic.base import TemplateView
from django.template.loader import render_to_string
from django.db import transaction
from hitcount.views import HitCountDetailView

from .mail import send_html_mail
from .paginator import Paginator
from .models import BlogPost, Comment
from .forms import CommentForm


class PostCountHitDetailView(HitCountDetailView):
    model = BlogPost
    count_hit = True


class Blog(ListView):
    models = BlogPost
    template_name = 'index.html'
    paginator_class = Paginator
    paginate_by = 9

    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.current_tag = None

    def get(self, request, *args, **kwargs):
        if self.request.GET.get('tag'):
            self.current_tag = self.request.GET['tag']
        return super(Blog, self).get(request, *args, **kwargs)

    def get_queryset(self):
        queryset = BlogPost.objects.order_by('id').reverse()
        if self.current_tag:
            queryset = queryset.filter(tags__name=self.request.GET['tag'])
        return queryset

    def get_context_data(self, **kwargs):
        context = super(Blog, self).get_context_data(**kwargs)
        context['tag'] = self.current_tag
        return context


class BlogNews(FormMixin, PostCountHitDetailView, DetailView):
    model = BlogPost
    template_name = 'blog.html'
    form_class = CommentForm

    def get_success_url(self):
        return self.object.get_absolute_url()

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)

        context['form'] = self.get_form()
        comments = Comment.objects.filter(post__slug=self.kwargs['slug']).order_by('-id')
        context['comments'] = comments

        return context

    @transaction.atomic()
    def post(self, request, slug, *args, **kwargs):
        self.object = self.get_object()
        post = get_object_or_404(BlogPost, slug=slug)
        form = self.get_form()

        if not request.POST.get('honeypot') and form.is_valid():
            comment = form.save(commit=False)

            comment.post = post
            x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
            if x_forwarded_for:
                ip = x_forwarded_for.split(',')[-1].strip()
            else:
                ip = request.META.get('REMOTE_ADDR')

            comment.ip_address = ip
            comment.save()

            email_data = {
                'name': form.cleaned_data['user_name'],
                'content': form.cleaned_data['content'],
                'email': form.cleaned_data['email'],
            }

            send_html_mail(
                'Коментарий в блоге', render_to_string(
                    'email/comment_mail.html',
                    context=email_data,
                    request=request
                ),
                settings.RECIPIENTS
            )

            return self.form_valid(form)

        return self.form_invalid(form)


class Google(TemplateView):
    template_name = 'google298d4c02287d7430.html'


class GoogleRobot(TemplateView):
    template_name = 'robots.txt'
