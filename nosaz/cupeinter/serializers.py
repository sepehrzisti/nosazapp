from rest_framework import serializers
from .models import CopeInter

class CupeinterSrializer(serializers.ModelSerializer):
        class Meta:
            model = CopeInter
            fields =['IDCUPE','NameStone','CupeType','CupeHeight','CupeWeight','CupeWidth','CupeOwner','CarThreeNumber','CarAlfabet','CarTwoNumber','CarTwoNumber','DataTime']