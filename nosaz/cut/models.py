from django.db import models
from django.utils import timezone

class Cut(models.Model):
    IDCUPE = models.OneToOneField('vacium.Vacium',to_field='material_id',on_delete=models.CASCADE,null=True,blank=True,default=None)
    Elferam = models.IntegerField(null=False,default=False)
    NumbersCut = models.IntegerField()
    CutNote = models.TextField(default=None)
    DataTime = models.DateTimeField(default=timezone.now)
    class Meta:
        verbose_name = 'کات'
        verbose_name_plural = 'کات'
    def __str__(self):
        return f'{self.IDCUPE}'
