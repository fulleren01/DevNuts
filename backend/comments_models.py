"""Comments App - Thread yorumları"""

from django.db import models
from django.contrib.auth.models import User

class Comment(models.Model):
    """Thread üzerindeki yorumlar"""
    thread = models.ForeignKey('threads.Thread', on_delete=models.CASCADE, related_name='comments')
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='comments')
    content = models.TextField()
    is_solution = models.BooleanField(default=False)  # Çözüm işareti
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'Comment'
        verbose_name_plural = 'Comments'
        ordering = ['created_at']

    def __str__(self):
        return f'Comment by {self.author.username} on {self.thread.title}'


class CommentLike(models.Model):
    """Yorum beğeni"""
    comment = models.ForeignKey(Comment, on_delete=models.CASCADE, related_name='likes')
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('comment', 'user')

    def __str__(self):
        return f'{self.user.username} liked comment {self.comment.id}'
