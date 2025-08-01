from django.db import models
from django.utils import timezone


class TimeBackWork(models.Model):
    IDCUPE = models.OneToOneField('storage.BackWorkMatrialStorage',to_field='material_id',on_delete=models.CASCADE,null=True,blank=True,default=None)
    Elferam = models.IntegerField(null=False,default=False)
    DataTime = models.DateTimeField(default=timezone.now)

    class Meta:
        verbose_name = 'گاری پشت'
        verbose_name_plural = 'گاری پشت'
    def __str__(self):
        return f"{self.IDCUPE}"


class BackWorkReject(models.Model):
    SlabNumber = models.OneToOneField('managerfactory.Regects',to_field='numslab',on_delete=models.CASCADE,null=True,blank=True,default=None)
    DataTime = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f"{self.SlabNumber}"



