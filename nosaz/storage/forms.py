
from django import forms
from .models import BackWorkMatrialStorage , FrontWorkMatrialStorage

class BackWorkMatrialStorageForm(forms.ModelForm):
    class Meta:
        model = BackWorkMatrialStorage
        fields = '__all__'

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        material = None

        # حالت ویرایش
        instance = kwargs.get('instance')
        if instance and instance.material:
            material = instance.material
        # حالت ساخت جدید
        elif 'material' in self.data:
            from managerfactory.models import MaterialBackWork
            try:
                material_id = self.data.get('material')
                material = MaterialBackWork.objects.get(pk=material_id)
            except (MaterialBackWork.DoesNotExist, ValueError, TypeError):
                pass

        # اعمال محدودیت‌ها
        if material:
            if not material.epocsi_active:
                self.fields['epocsi'].disabled = True
            if not material.zhel_active:
                self.fields['zhel'].disabled = True
            if not material.mastic_active:
                self.fields['mastic'].disabled = True
            if not material.rezin_active:
                self.fields['rezin'].disabled = True
            if not material.bakiye_active:
                self.fields['bakiye'].disabled = True
            if not material.tori_active:
                self.fields['tori'].disabled = True





class FrontWorkMatrialStorageForm(forms.ModelForm):
    class Meta:
        model = BackWorkMatrialStorage
        fields = '__all__'

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        material = None

        # گرفتن instance از self.instance به جای kwargs.get
        instance = getattr(self, 'instance', None)

        # حالت ویرایش
        if instance and getattr(instance, 'material', None):
            material = instance.material
        else:
            # حالت ساخت جدید: چک کردن self.admin فقط اگر وجود داشته باشد و معتبر باشد
            if self.data and 'material' in self.data:
                from managerfactory.models import MaterialFrontWork
                material_id = self.data.get('material')
                try:
                    material_id = int(material_id)
                    material = MaterialFrontWork.objects.get(pk=material_id)
                except (MaterialFrontWork.DoesNotExist, ValueError, TypeError):
                    material = None

        # اعمال محدودیت‌ها روی فیلدها
        if material:
            if not material.epocsi_active:
                self.fields['epocsi'].disabled = True
            if not material.zhel_active:
                self.fields['zhel'].disabled = True
            if not material.mastic_active:
                self.fields['mastic'].disabled = True
            if not material.rezin_active:
                self.fields['rezin'].disabled = True
            if not material.bakiye_active:
                self.fields['bakiye'].disabled = True
            if not material.tori_active:
                self.fields['tori'].disabled = True

