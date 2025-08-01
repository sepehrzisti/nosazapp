from django.db import models
from django.utils import timezone


class Ferez(models.Model):
    IDCUPE = models.OneToOneField('sab.Sab',to_field='IDCUPE_id',on_delete=models.CASCADE)
    Height = models.IntegerField()
    Width = models.IntegerField()
    NumbersSlabsFerez= models.IntegerField()
    DataTime = models.DateTimeField(default=timezone.now)

class SizeFerez(models.Model):
    CUT_ID = models.ForeignKey(Ferez,on_delete=models.CASCADE,null=True,blank=True,default=None)
    NumbersCutFerez= models.IntegerField()
    Height = models.IntegerField()
    Width = models.IntegerField()
    Elferam = models.IntegerField()
