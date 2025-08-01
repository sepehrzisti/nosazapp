from django.conf import settings
from django.contrib.auth.models import AbstractUser, Group, Permission
from django.db import models

class Profile(AbstractUser):  # این حالا مدل کاربر شماست
    ROLE_CHOICES = (
        ('backwork', 'Backwork'),
        ('cupeinter', 'Cupeinter'),
        ('cut', 'Cut'),
        ('cutcode','Cutcode'),
        ('ferez','Ferez'),
        ('frontwork','Frontwork'),
        ('furnace','Furnace'),
        ('managerfactory','Managerfactory'),
        ('pishsab','Pishsab'),
        ('sab','Sab'),
        ('sellmanager','Sellmanager'),
        ('storage','Storage'),
        ('vacium','Vacium'),
    )
    phone = models.CharField(max_length=20, blank=True, null=True, unique=True)
    role = models.CharField(max_length=20, choices=ROLE_CHOICES,blank=True, null=True)

    groups = models.ManyToManyField(
        Group,
        related_name='customuser_set',
        blank=True
    )
    user_permissions = models.ManyToManyField(
        Permission,
        related_name='customuser_set',
        blank=True
    )
