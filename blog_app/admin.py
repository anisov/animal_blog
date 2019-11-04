from django.contrib import admin
from blog_app.models import BlogPost, Comment

admin.site.register(BlogPost)


class CommentAdmin(admin.ModelAdmin):
    list_display = ('user_name', 'email', 'approved_comment', 'content')


admin.site.register(Comment, CommentAdmin)
