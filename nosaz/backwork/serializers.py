from rest_framework import serializers
from .models import TimeBackWork ,BackWorkReject
from storage.models import BackWorkMatrialStorage

class BackWorkSerializer(serializers.ModelSerializer):
    IDCUPE = serializers.PrimaryKeyRelatedField(queryset=BackWorkMatrialStorage.objects.none())

    class Meta:
        model = TimeBackWork
        fields = ['IDCUPE','Elferam', 'DataTime']

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        instance = self.instance if isinstance(self.instance, TimeBackWork) else None

        used_ids = list(TimeBackWork.objects.exclude(IDCUPE=None).values_list('IDCUPE_id', flat=True))

        if instance and instance.IDCUPE_id in used_ids:
            used_ids.remove(instance.IDCUPE_id)

        self.fields['IDCUPE'].queryset = BackWorkMatrialStorage.objects.exclude(pk__in=used_ids)

    def validate_IDCUPE(self, value):
        qs = TimeBackWork.objects.filter(IDCUPE=value)
        if isinstance(self.instance, TimeBackWork):
            qs = qs.exclude(pk=self.instance.pk)

        if qs.exists():
            raise serializers.ValidationError("این مقدار قبلاً استفاده شده و قابل استفاده مجدد نیست.")

        return value


class BackWorkRejectSrializer(serializers.ModelSerializer):
        class Meta:
            model = BackWorkReject
            fields = ['SlabNumber', 'DataTime']
