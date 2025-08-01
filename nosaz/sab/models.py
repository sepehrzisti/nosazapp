from django.db import models
from django.utils import timezone

class Sab (models.Model):
    IDCUPE = models.OneToOneField('frontwork.FrontWork',to_field='IDCUPE_id',on_delete=models.CASCADE,null=True,blank=True,default=None)
    slids = models.IntegerField()
    Elferam = models.IntegerField(null=False,default=False)
    DataTime = models.DateTimeField(default=timezone.now)
    class Meta:
        verbose_name = 'ساب'
        verbose_name_plural ='ساب'
    def __str__(self):
        return f'{self.IDCUPE} or {self.slids}'
    
class SabReject(models.Model):
    SlabNumber = models.ForeignKey('managerfactory.Regects',on_delete=models.CASCADE,null=True,blank=True,default=None)
    ResicetoSab = models.ForeignKey('frontwork.FrontWorkReject',on_delete=models.CASCADE,null=True,blank=True,default=None,related_name='sab_rejects')
    DataTime = models.DateTimeField(default=timezone.now)

    class Meta:
        verbose_name = 'سنگ برگشتی'
        verbose_name_plural ='سنگ برگشتی'
    def __str__(self):
        return f'{self.SlabNumber} or{self.Numslab}'