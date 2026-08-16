"""Threads App - Forum başlıkları/thread'leri"""

from django.db import models
from django.contrib.auth.models import User

class Category(models.Model):
    """Forum kategorileri"""
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField()
    slug = models.SlugField(unique=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'
        ordering = ['name']

    def __str__(self):
        return self.name


class Thread(models.Model):
    """Forum başlıkları"""
    title = models.CharField(max_length=200)
    description = models.TextField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='threads')
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='threads')
    views_count = models.IntegerField(default=0)
    is_pinned = models.BooleanField(default=False)
    is_locked = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'Thread'
        verbose_name_plural = 'Threads'
        ordering = ['-is_pinned', '-created_at']

    def __str__(self):
        return self.title


class ThreadLike(models.Model):
    """Thread beğeni"""
    thread = models.ForeignKey(Thread, on_delete=models.CASCADE, related_name='likes')
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('thread', 'user')

    def __str__(self):
        return f'{self.user.username} liked {self.thread.title}'
