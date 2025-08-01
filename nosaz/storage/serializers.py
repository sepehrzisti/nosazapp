from rest_framework import serializers
from .models import  BackWorkMatrialStorage,FrontWorkMatrialStorage,VaciumMaterialStorage
from managerfactory.models import Makesh
from managerfactory.models import MaterialBackWork

class VaciumStorageSerializer(serializers.ModelSerializer):
    material = serializers.PrimaryKeyRelatedField(queryset=Makesh.objects.none())

    class Meta:
        model = VaciumMaterialStorage
        fields = [
            'material', 'tori400', 'toridocupe', 'torivacium', 'lolerodei',
            'lolevacium', 'pelastic', 'epocsivacium', 'zhelvacium', 'rezin',
            'chasbeghiri', 'chasbedotarafe', 'chasbe123', 'mayea123',
            'DataTime'
        ]

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        used_ids = VaciumMaterialStorage.objects.values_list('material__IDCUPE_id', flat=True)
        instance = kwargs.get('instance')
        if instance and instance.material and instance.material.IDCUPE_id in used_ids:
            used_ids = list(used_ids)
            used_ids.remove(instance.material.IDCUPE_id)
        # در نهایت اعمال فیلتر صحیح
        self.fields['material'].queryset = Makesh.objects.exclude(IDCUPE_id__in=used_ids)









class BackWorkMatrialStorageSerializer(serializers.ModelSerializer):
    material = serializers.PrimaryKeyRelatedField(queryset=MaterialBackWork.objects.all())

    class Meta:
        model = BackWorkMatrialStorage
        fields = [
            'material',
            'epocsi', 'zhel', 'mastic', 'rezin', 'bakiye', 'tori', 'DataTime'
        ]

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        used_codes = BackWorkMatrialStorage.objects.values_list('material', flat=True)
        instance = kwargs.get('instance', None)
        if instance and instance.material_id in used_codes:
            used_codes = list(used_codes)
            used_codes.remove(instance.material_id)

        self.fields['material'].queryset = MaterialBackWork.objects.exclude(cut_code__in=used_codes)

    def validate(self, attrs):
        material = attrs.get('material')
        if material:
            if not material.epocsi_active and attrs.get('epocsi', 0) > 0:
                raise serializers.ValidationError("فیلد اپوکسی فعال نیست.")
            if not material.zhel_active and attrs.get('zhel', 0) > 0:
                raise serializers.ValidationError("فیلد ژل فعال نیست.")
            if not material.mastic_active and attrs.get('mastic', 0) > 0:
                raise serializers.ValidationError("فیلد ماستیک فعال نیست.")
            if not material.rezin_active and attrs.get('rezin', 0) > 0:
                raise serializers.ValidationError("فیلد رزین فعال نیست.")
            if not material.bakiye_active and attrs.get('bakiye', 0) > 0:
                raise serializers.ValidationError("فیلد بخیه فعال نیست.")
            if not material.tori_active and attrs.get('tori', 0) > 0:
                raise serializers.ValidationError("فیلد توری فعال نیست.")
        return attrs








class FrontWorkMatrialStorageSerializer(serializers.ModelSerializer):
    class Meta:
        model = FrontWorkMatrialStorage
        fields = [
            'material',
            'epocsi', 'zhel', 'mastic', 'rezin', 'bakiye', 'tori', 'DataTime'
        ]

    def validate(self, attrs):
        material = attrs.get('material')
        if material:
            if not material.epocsi_active and attrs.get('epocsi', 0) > 0:
                raise serializers.ValidationError("فیلد اپوکسی فعال نیست.")
            if not material.zhel_active and attrs.get('zhel', 0) > 0:
                raise serializers.ValidationError("فیلد ژل فعال نیست.")
            if not material.mastic_active and attrs.get('mastic', 0) > 0:
                raise serializers.ValidationError("فیلد ماستیک فعال نیست.")
            if not material.rezin_active and attrs.get('rezin', 0) > 0:
                raise serializers.ValidationError("فیلد رزین فعال نیست.")
            if not material.bakiye_active and attrs.get('bakiye', 0) > 0:
                raise serializers.ValidationError("فیلد بخیه فعال نیست.")
            if not material.tori_active and attrs.get('tori', 0) > 0:
                raise serializers.ValidationError("فیلد توری فعال نیست.")
        return attrs