from rest_framework import serializers
from .models import  Order

class SellManagerSrializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields =['meters','Type_Stone','Heiht','Width','Thickness','DataTime','Note']