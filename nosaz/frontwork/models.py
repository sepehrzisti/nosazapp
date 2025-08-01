from django.db import models
from django.utils import timezone


class FrontWork(models.Model):
    IDCUPE = models.OneToOneField('storage.FrontWorkMatrialStorage',to_field='material_id',on_delete=models.CASCADE,null=True,blank=True,default=None)
    Elferam = models.IntegerField(null=False,default=False)
    DataTime = models.DateTimeField(default=timezone.now)

    class Meta:
        verbose_name = 'گاری رو'
        verbose_name_plural = 'گاری رو'

    def __str__(self):
        return f"{self.IDCUPE}"

class FrontWorkReject(models.Model):
    SlabNumber = models.ForeignKey('managerfactory.Regects',to_field='numslab',on_delete=models.SET_NULL,null=True,blank=True,default=None)
    Resicetobackwork = models.OneToOneField('pishsab.PishSabReject',on_delete=models.CASCADE,null=True,blank=True,default=None)
    DataTime = models.DateTimeField(default=timezone.now)
    def __str__(self):
        return f"{self.SlabNumber}"

