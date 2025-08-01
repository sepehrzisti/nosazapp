from django.db import models
from django.utils import timezone

class furnace(models.Model):
    IDCUPE = models.OneToOneField('cut.Cut',to_field='IDCUPE_id',unique=True,on_delete=models.CASCADE,null=True,blank=True,default=None)
    DataTime = models.DateTimeField(default=timezone.now)
    class Meta:
        verbose_name = 'کوره'
        verbose_name_plural = 'کوره' 

    def __str__(self):
        return f'{self.IDCUPE}'