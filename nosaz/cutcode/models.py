from django.db import models
from django.utils import timezone


class CutCode(models.Model):
    IDCUPE = models.OneToOneField('Furnace.furnace',to_field='IDCUPE_id',on_delete=models.CASCADE,null=True,blank=True,default=None)
    NoteCutCode = models.TextField(default=False)
    DataTime = models.DateTimeField(default=timezone.now)
    class Meta:
        verbose_name = 'کدگذاری'
        verbose_name_plural = 'کدگذاری'
    def __str__(self):
        return f'{self.IDCUPE}'


class Size(models.Model):
    cut_code = models.ForeignKey(CutCode, on_delete=models.CASCADE, null=True, blank=True, default=None,related_name='sizes')
    NumsCutCod = models.IntegerField(default=False)
    HeihtCutCode = models.IntegerField()
    WidthCutCode= models.IntegerField()
    ThicknessCutCode = models.IntegerField()
    def __str__(self):
        return f'{self.cut_code}'