from rest_framework import serializers
from .models import  Sab,SabReject

class SabSrializer(serializers.ModelSerializer):
    class Meta:
        model = Sab
        fields =['IDCUPE','slids','DataTime']


class RejectSrializer(serializers.ModelSerializer):
    class Meta:
        model = SabReject
        fields = ['SlabNumber','ResicetoSab','DataTime']
