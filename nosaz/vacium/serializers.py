from rest_framework import serializers
from .models import Vacium
from storage.models import VaciumMaterialStorage

class VaciumSerializer(serializers.ModelSerializer):
    material = serializers.PrimaryKeyRelatedField(queryset=VaciumMaterialStorage.objects.none())

    class Meta:
        model = Vacium
        fields = ['material','DataTime']

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        used_ids = VaciumMaterialStorage.objects.values_list('material__IDCUPE_id', flat=True)
        instance = kwargs.get('instance')
        if instance and instance.material and instance.material.IDCUPE_id in used_ids:
            used_ids = list(used_ids)
            used_ids.remove(instance.material.IDCUPE_id)
        self.fields['material'].queryset = VaciumMaterialStorage.objects.exclude(material_id__in=used_ids)
