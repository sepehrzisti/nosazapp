from django.db import models
from django.utils import timezone

class Vacium(models.Model):
    material = models.OneToOneField('storage.VaciumMaterialStorage',to_field='material_id',on_delete=models.CASCADE,null=True,blank=True,default=None)
    DataTime = models.DateTimeField(default=timezone.now)
    class Meta:
        verbose_name = 'وکیوم'
        verbose_name_plural ='وکیوم'   
    def __str__(self):
        return f"{self.material}"