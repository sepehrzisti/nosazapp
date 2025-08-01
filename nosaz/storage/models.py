from django.utils import timezone
from django.db import models


class VaciumMaterialStorage(models.Model):
    material = models.OneToOneField('managerfactory.Makesh',to_field='IDCUPE_id',on_delete=models.CASCADE,null=True,blank=True,default=None, related_name='Vacium')
    tori400= models.IntegerField(null=True, blank=True)
    toridocupe = models.IntegerField(null=True, blank=True)
    torivacium = models.IntegerField(null=True, blank=True)
    lolerodei=models.IntegerField(null=True, blank=True)
    lolevacium=models.IntegerField(null=True, blank=True)
    pelastic = models.IntegerField(null=True, blank=True)
    epocsivacium = models.IntegerField(null=True, blank=True)
    zhelvacium = models.IntegerField(null=True, blank=True)
    rezin=models.IntegerField(null=True, blank=True)
    chasbeghiri = models.IntegerField(null=True, blank=True)
    chasbedotarafe = models.IntegerField(null=True, blank=True)
    chasbe123= models.IntegerField(null=True, blank=True)
    mayea123= models.IntegerField(null=True, blank=True)
    DataTime = models.DateTimeField(default=timezone.now)
    class Meta:
        verbose_name = 'مواد وکیوم'
        verbose_name_plural ='مواد وکیوم'
    def __str__(self):
        return f"{self.material}"



# storage/models.py


class BackWorkMatrialStorage(models.Model):
    material = models.OneToOneField(
        "managerfactory.MaterialBackWork",
        to_field='cut_code',  # اگر کلید خارجی خاصی داری می‌تونی تغییر بدی
        on_delete=models.CASCADE,
        related_name='backwork_storage',
        verbose_name='ماده بازکاری'
    )

    epocsi = models.IntegerField(default=0)
    zhel = models.IntegerField(default=0)
    mastic = models.IntegerField(default=0)
    rezin = models.IntegerField(default=0)
    bakiye = models.IntegerField(default=0)
    tori = models.IntegerField(default=0)
    DataTime = models.DateTimeField(default=timezone.now)
    class Meta:
            verbose_name = 'مواد گاری پشت '
            verbose_name_plural = 'مواد گاری پشت'
    def __str__(self):
        return f"{self.material}"










        
class FrontWorkMatrialStorage(models.Model):
    material = models.OneToOneField("managerfactory.MaterialFrontWork",to_field='cut_code_id',on_delete=models.CASCADE,related_name='back_works')
    epocsi = models.IntegerField(default=0)
    zhel = models.IntegerField(default=0)
    mastic = models.IntegerField(default=0)
    rezin = models.IntegerField(default=0)
    bakiye = models.IntegerField(default=0)
    tori = models.IntegerField(default=0)
    DataTime = models.DateTimeField(default=timezone.now)


    class Meta:
        verbose_name = 'مواد گاری رو '
        verbose_name_plural ='مواد گاری رو '
    def __str__(self):
        return f"{self.material}"
    

    
