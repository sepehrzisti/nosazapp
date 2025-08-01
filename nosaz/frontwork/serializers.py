from rest_framework import serializers
from .models import FrontWork ,FrontWorkReject

class FrontWorkSrializer(serializers.ModelSerializer):
        class Meta:
            model = FrontWork
            fields =['IDCUPE','DataTime']


class FrontWorkRejectSrializer(serializers.ModelSerializer):
    class Meta:
        model = FrontWorkReject
        fields = ['SlabNumber', 'Resicetobackwork','DataTime']