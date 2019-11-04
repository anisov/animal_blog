from blog_app.views import *
from django.conf import settings
from django.conf.urls.static import static
from django.conf.urls import include, url
from django.contrib import admin

urlpatterns = [
    url(r'^ckeditor/', include('ckeditor_uploader.urls')),
    url(r'^admin/', admin.site.urls),

    url(r'^$', Blog.as_view(), name='blog'),
    url(r'^blog/(?P<slug>[-\w]+)$', BlogNews.as_view(), name='blog_news'),

    url(r'^google298d4c02287d7430.html', Google.as_view(), name='google'),
    url(r'^robots.txt', GoogleRobot.as_view(), name='robot'),

    url(r'^ckeditor/', include('ckeditor_uploader.urls')),
    url(r'hitcount/', include('hitcount.urls', namespace='hitcount')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
