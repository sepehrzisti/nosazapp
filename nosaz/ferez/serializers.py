from rest_framework import serializers
from .models import SizeFerez , Ferez

class FerezSrializer(serializers.ModelSerializer):
        class Meta:
            model = Ferez
            fields =['IDCUPE','Height','Width','NumbersSlabsFerez','DataTime']


class SizeFerezSrializer(serializers.ModelSerializer):
    class Meta:
        model = SizeFerez
        fields = ['CUT_ID','NumbersCutFerez', 'Height', 'Width', 'Elferam']