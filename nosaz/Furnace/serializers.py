from rest_framework import serializers
from .models import furnace
from cut.models import Cut


class FurnaceSrializer(serializers.ModelSerializer):
    IDCUPE = serializers.PrimaryKeyRelatedField(queryset=furnace.objects.all())

    class Meta:
        model = furnace
        fields = ['IDCUPE', 'DataTime']  # 'idcupe_id' را از اینجا حذف کنید اگر فیلد را حذف کردید

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        used_ids = furnace.objects.values_list('IDCUPE', flat=True)
        instance = kwargs.get('instance', None)

        if instance and instance.IDCUPE_id in used_ids:
            used_ids = list(used_ids)
            used_ids.remove(instance.IDCUPE_id)

        self.fields['IDCUPE'].queryset = Cut.objects.exclude(IDCUPE_id__in=used_ids)

    # اگر فیلد را نگه می‌دارید:
    def get_idcupe_id(self, obj):
        if obj.IDCUPE and hasattr(obj.IDCUPE, 'material') and obj.IDCUPE.material:
            return obj.IDCUPE.material.id
        return None


