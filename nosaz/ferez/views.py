from rest_framework import generics
from rest_framework import permissions
from .models import Ferez , SizeFerez
from .serializers import FerezSrializer ,SizeFerezSrializer


class FerezView(generics.ListCreateAPIView):
    queryset = Ferez.objects.all()
    serializer_class = FerezSrializer
    permission_classes = [permissions.AllowAny]


class SizeFerezView(generics.ListCreateAPIView):
    queryset = SizeFerez.objects.all()
    serializer_class = SizeFerezSrializer
    permission_classes = [permissions.AllowAny]