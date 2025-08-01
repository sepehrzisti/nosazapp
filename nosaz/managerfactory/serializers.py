from .models import MaterialBackWork,MaterialFrontWork,Makesh ,ProductionStone ,Regects
from cutcode.models import CutCode
from rest_framework import serializers
from .models import Makesh
from vacium.models import Vacium
from managerfactory.models import ProductionStone



class MaterialBackWorkSerializer(serializers.ModelSerializer):
    cut_code = serializers.PrimaryKeyRelatedField(queryset=CutCode.objects.none())
    cut_code_str = serializers.SerializerMethodField()

    class Meta:
        model = MaterialBackWork
        fields = ['cut_code', 'cut_code_str', 'epocsi_active', 'zhel_active',
                  'mastic_active', 'rezin_active', 'bakiye_active', 'tori_active', 'DataTime']

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        used_ids = MaterialBackWork.objects.values_list('cut_code__IDCUPE_id', flat=True)

        instance = kwargs.get('instance', None)
        if instance and instance.cut_code.IDCUPE_id in used_ids:
            used_ids = list(used_ids)
            used_ids.remove(instance.cut_code.IDCUPE_id)

        self.fields['cut_code'].queryset = CutCode.objects.exclude(IDCUPE_id__in=used_ids)

    def validate_cut_code(self, value):
        instance = getattr(self, 'instance', None)
        if instance and instance.cut_code == value:
            return value

        if MaterialBackWork.objects.filter(cut_code=value).exists():
            raise serializers.ValidationError("این کد برش قبلاً استفاده شده است.")
        return value

    def get_cut_code_str(self, obj):
        return str(obj.cut_code) if obj.cut_code else None




class MaterialFrontWorkSrializer(serializers.ModelSerializer):
    class Meta:
        model = MaterialFrontWork
        fields = ['cut_code','epocsi_active','zhel_active','mastic_active','rezin_active','bakiye_active','tori_active','DataTime']










class ProductionStoneSerializer(serializers.ModelSerializer):

    class Meta:
        model = ProductionStone
        fields = ['IDCUPE', 'DataTime']

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        # حذف رکوردهای تکراری IDCUPE در queryset فیلد IDCUPE
        used_ids = ProductionStone.objects.values_list('IDCUPE', flat=True)
        instance = kwargs.get('instance', None)
        if instance and instance.IDCUPE_id in used_ids:
            used_ids = list(used_ids)
            used_ids.remove(instance.IDCUPE_id)

        # به شرط اینکه فیلد IDCUPE رابطه ForeignKey داشته باشه
        if 'IDCUPE' in self.fields:
            self.fields['IDCUPE'].queryset = ProductionStone.objects.exclude(IDCUPE__in=used_ids)











class MakeshSerializer(serializers.ModelSerializer):
    IDCUPE = serializers.PrimaryKeyRelatedField(queryset=ProductionStone.objects.all())

    class Meta:
        model = Makesh
        fields = ['IDCUPE', 'vacium', 'Boghche', 'DontUse', 'DataTime']

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        # اگر می‌خواهی مشابه فیلتر Cut، رکوردهای تکراری را حذف کنی، اینجا می‌تونی انجام بدی
        used_ids = Makesh.objects.values_list('IDCUPE', flat=True)
        instance = kwargs.get('instance', None)
        if instance and instance.IDCUPE_id in used_ids:
            used_ids = list(used_ids)
            used_ids.remove(instance.IDCUPE_id)

        self.fields['IDCUPE'].queryset = ProductionStone.objects.exclude(IDCUPE__in=used_ids)
    def get_idcupe(self, obj):
        if obj.IDCUPE and obj.IDCUPE.IDCUPE and obj.IDCUPE.IDCUPE.IDCUPE:
            raw_id = str(obj.IDCUPE.IDCUPE.IDCUPE)
            return int(raw_id.replace("IDCUPE", ""))
        return None





class RejectSrializer(serializers.ModelSerializer):
    class Meta:
        model = Regects
        fields =['numslab','BackWorkToReject','FrontWorkToReject','PishSabReject','SabReject']

