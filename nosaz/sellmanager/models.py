from django.db import models
from django.utils import timezone

class Order(models.Model):
    meters = models.IntegerField()
    Type_Stone = [('persian silk','persian silk')]
    Heiht= models.IntegerField()
    Width= models.IntegerField()
    Thickness = models.IntegerField()
    Note = models.TextField()
    DataTime = models.DateTimeField(default=timezone.now)
    class Meta:
        verbose_name = 'سفارشات'
        verbose_name_plural ='سفارشات'
    def __str__(self):
        return f"{self.meters}"   
