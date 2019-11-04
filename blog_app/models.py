from datetime import datetime

from django.db import models
from django.urls import reverse
from django.contrib.contenttypes.fields import GenericRelation
from django.template.defaultfilters import slugify
from ckeditor_uploader.fields import RichTextUploadingField
from taggit.managers import TaggableManager
from hitcount.models import HitCount


class BlogPost(models.Model):
    title = models.CharField(max_length=200, verbose_name='Заголовок блога', unique=True)
    slug = models.SlugField(max_length=200, verbose_name='Слаг', unique=True)
    short_info = models.CharField(max_length=200, verbose_name='Краткое описание')
    full_info = RichTextUploadingField(verbose_name='Полное описание поста')
    img = models.ImageField(upload_to='img', blank=True, null=True, verbose_name='Главное изображение')
    posted = models.DateTimeField(default=datetime.now, db_index=True, verbose_name='Опубликовано')
    tags = TaggableManager(blank=True, verbose_name='Тэги')

    hit_count_generic = GenericRelation(
        HitCount, object_id_field='object_pk',
        related_query_name='hit_count_generic_relation')

    def get_absolute_url(self):
        return reverse('blog_news', kwargs={'slug': self.slug})

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super(BlogPost, self).save(*args, **kwargs)

    class Meta:
        verbose_name = 'Блог'
        verbose_name_plural = "Блог"


class Comment(models.Model):
    user_name = models.CharField(null=True, max_length=200, verbose_name='Имя')
    email = models.EmailField(null=True, max_length=250)
    post = models.ForeignKey(BlogPost, related_name='comments', on_delete=models.CASCADE)
    content = models.TextField(null=True, verbose_name='Комментарий')
    pub_date = models.DateTimeField('Дата комментария', default=datetime.now)
    approved_comment = models.BooleanField(default=True)
    ip_address = models.GenericIPAddressField(default='127.1.0.1', verbose_name='ip')

    def __str__(self):
        return f'{self.user_name}, {self.email}, {self.pub_date}'

    class Meta:
        verbose_name = 'Коментарий'
        verbose_name_plural = "Коментарии"
