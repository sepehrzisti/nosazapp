from django.db import models
from django.utils import timezone
from django_jalali.db import models as jmodels

class CopeInter(models.Model):
    IDCUPE = models.IntegerField(unique=True)
    NameStone = models.CharField(max_length=120)
    CupeType = models.CharField(max_length=120)
    CupeHeight = models.CharField(max_length=120)
    CupeWeight = models.CharField(max_length=120)
    CupeWidth = models.CharField(max_length=120)
    CupeOwner = models.CharField(max_length=120)
    CupeLength = models.CharField(max_length=120 ,default="")
    CarThreeNumber = models.IntegerField()
    CarAlfabet = models.CharField(max_length=120)
    CarTwoNumber = models.IntegerField()
    DataTime = jmodels.jDateTimeField(default=timezone.now)

    class Meta:
        verbose_name = 'کات'
        verbose_name_plural = 'کات'
    def __str__(self):
        return f'{self.IDCUPE}'
