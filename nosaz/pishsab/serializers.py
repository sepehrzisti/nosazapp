from rest_framework import serializers
from .models import  PishSab,PishSabReject

class PishSabSrializer(serializers.ModelSerializer):
    class Meta:
        model = PishSab
        fields =['IDCUPE','slids','DataTime']


class PishSabRejectSrializer(serializers.ModelSerializer):
    class Meta:
        model = PishSabReject
        fields = ['SlabNumber','Resicetobackwork','DataTime']
