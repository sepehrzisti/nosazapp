from django.db import models
from django.utils import timezone

class PishSab (models.Model):
    IDCUPE = models.OneToOneField('backwork.TimeBackWork',to_field='IDCUPE_id',on_delete=models.CASCADE,null=True,blank=True,default=None)
    slids = models.IntegerField()
    Elferam = models.IntegerField(null=False,default=False)
    DataTime = models.DateTimeField(default=timezone.now)
    class Meta:
        verbose_name = 'پیش ساب'
        verbose_name_plural = 'پیش ساب'      
    def __str__(self):
        return f"{self.IDCUPE}"




class PishSabReject(models.Model):
    SlabNumber = models.ForeignKey('managerfactory.Regects',to_field='numslab',on_delete=models.CASCADE,null=True,blank=True,default=None)
    Resicetobackwork = models.OneToOneField('frontwork.FrontWorkReject',on_delete=models.CASCADE,null=True,blank=True,default=None)
    DataTime = models.DateTimeField(default=timezone.now)
    class Meta:
        verbose_name = 'سنگ برگشتی'
        verbose_name_plural ='سنگ برگشتی'  
    def __str__(self):
        return f"{self.SlabNumber or self.Resicetobackwork}"