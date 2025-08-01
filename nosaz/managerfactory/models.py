from django.db import models
from django.utils import timezone


class MaterialBackWork(models.Model):
    cut_code = models.OneToOneField(
        'cutcode.CutCode',
        to_field='IDCUPE_id',
        on_delete=models.CASCADE,
        related_name='materials',
        verbose_name='کد برش',
        unique=False
    )
    epocsi_active = models.BooleanField(verbose_name='فعال بودن اپوکسی')
    zhel_active = models.BooleanField(default=False, verbose_name='فعال بودن ژل')
    mastic_active = models.BooleanField(default=False, verbose_name='فعال بودن ماستیک')
    rezin_active = models.BooleanField(default=False, verbose_name='فعال بودن رزین')
    bakiye_active = models.BooleanField(default=False, verbose_name='فعال بودن باقی مانده')
    tori_active = models.BooleanField(default=False, verbose_name='فعال بودن توری')
    DataTime = models.DateTimeField(default=timezone.now)


    class Meta:
        verbose_name = ' ماده اولیه گاری پشت'
        verbose_name_plural = ' ماده اولیه گاری پشت'

    def __str__(self):
        return f"{self.cut_code}"



class MaterialFrontWork(models.Model):
    cut_code = models.OneToOneField(
        'pishsab.PishSab',
        on_delete=models.CASCADE,
        to_field='IDCUPE_id',

        related_name='materials',
        verbose_name='کد برش',
    )
    epocsi_active = models.BooleanField(default=False,verbose_name='فعال بودن اپوکسی')
    zhel_active = models.BooleanField(default=False,verbose_name='فعال بودن ژل')
    mastic_active = models.BooleanField(default=False,verbose_name='فعال بودن ماستیک')
    rezin_active = models.BooleanField(default=False,verbose_name='فعال بودن رزین')
    bakiye_active = models.BooleanField(default=False,verbose_name='فعال بودن بخیه')
    tori_active = models.BooleanField(default=False,verbose_name='فعال بودن توری')
    DataTime = models.DateTimeField(default=timezone.now)
    class Meta:
        verbose_name =   ' ماده اولیه گاری رو'
        verbose_name_plural = ' ماده اولیه گاری رو'
    def __str__(self):
        return f"{self.cut_code}"









class Regects(models.Model):
    numslab = models.IntegerField(unique=True, verbose_name='شماره اسلب')
    BackWorkToReject = models.BooleanField(default=False)
    FrontWorkToReject = models.BooleanField(default=False)
    PishSabReject = models.BooleanField(default=False)
    SabReject = models.BooleanField(default=False)
    DataTime = models.DateTimeField(default=timezone.now)
    def __str__(self):
        return f"{self.numslab}"









class ProductionStone(models.Model):
    IDCUPE = models.OneToOneField('cupeinter.CopeInter',to_field="IDCUPE" ,on_delete=models.CASCADE,null=True,blank=True,default=None)
    DataTime = models.DateTimeField(default=timezone.now)
    class Meta:
        verbose_name = 'انتخاب کوپ'
        verbose_name_plural = 'انتخاب کوپ'
    def __str__(self):
        return f"{self.IDCUPE}"


class Makesh(models.Model):
    IDCUPE = models.OneToOneField(ProductionStone,to_field='IDCUPE_id',on_delete=models.CASCADE,null=True,blank=True,default=None)
    vacium = models.BooleanField(default=False)
    Boghche = models.BooleanField(default=False)
    DontUse = models.BooleanField(default=False)
    DataTime = models.DateTimeField(default=timezone.now) 
    class Meta:
        verbose_name = 'مواد اولیه وکیوم'
        verbose_name_plural ='مواد اولیه وکیوم'       
    def __str__(self):
        return f"{self.IDCUPE}"