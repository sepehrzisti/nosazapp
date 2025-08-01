from rest_framework import serializers
from .models import CutCode, Size
from Furnace.models import furnace  # مدل مرتبط را درست وارد کن

class SizeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Size
        fields = ['NumsCutCod', 'HeihtCutCode', 'WidthCutCode', 'ThicknessCutCode']

class CutCodeSerializer(serializers.ModelSerializer):
    IDCUPE = serializers.SlugRelatedField(
        slug_field='IDCUPE_id',
        queryset=furnace.objects.all()
    )
    sizes = SizeSerializer(many=True)

    class Meta:
        model = CutCode
        fields = ['IDCUPE', 'DataTime', 'NoteCutCode', 'sizes']

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        used_ids = CutCode.objects.values_list('IDCUPE', flat=True)
        instance = kwargs.get('instance', None)
        if instance and instance.IDCUPE_id in used_ids:
            used_ids = list(used_ids)
            used_ids.remove(instance.IDCUPE_id)
        self.fields['IDCUPE'].queryset = furnace.objects.exclude(IDCUPE_id__in=used_ids)

    def create(self, validated_data):
        sizes_data = validated_data.pop('sizes')
        cut_code = CutCode.objects.create(**validated_data)
        for size_data in sizes_data:
            Size.objects.create(cut_code=cut_code, **size_data)
        return cut_code

    def update(self, instance, validated_data):
        sizes_data = validated_data.pop('sizes', None)

        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()

        if sizes_data is not None:
            instance.sizes.all().delete()
            for size_data in sizes_data:
                Size.objects.create(cut_code=instance, **size_data)

        return instance
