"""Users App - Kullanıcı yönetimi"""

from django.db import models
from django.contrib.auth.models import User

class UserProfile(models.Model):
    """Kullanıcı profil bilgileri"""
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.TextField(blank=True, default='')
    avatar = models.ImageField(upload_to='avatars/', null=True, blank=True)
    github_url = models.URLField(blank=True, default='')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'User Profile'
        verbose_name_plural = 'User Profiles'

    def __str__(self):
        return f'{self.user.username} Profile'
