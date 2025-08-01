from rest_framework import serializers
from .models import Cut
from vacium.models import Vacium

class CutSerializer(serializers.ModelSerializer):
    IDCUPE = serializers.PrimaryKeyRelatedField(queryset=Vacium.objects.none())

    class Meta:
        model = Cut
        fields = ['IDCUPE', 'Elferam', 'NumbersCut', 'CutNote', 'DataTime']

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        used_ids = Cut.objects.values_list('IDCUPE__material_id', flat=True)
        instance = kwargs.get('instance')
        if instance and instance.IDCUPE and instance.IDCUPE.material_id in used_ids:
            used_ids = list(used_ids)
            used_ids.remove(instance.IDCUPE.material_id)
        self.fields['IDCUPE'].queryset = Vacium.objects.exclude(material_id__in=used_ids)

