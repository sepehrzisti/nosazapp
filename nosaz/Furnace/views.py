from rest_framework import generics ,permissions
from .models import furnace
from .serializers import FurnaceSrializer

class FurnaceView(generics.ListCreateAPIView):
        queryset = furnace.objects.all()
        serializer_class = FurnaceSrializer
        permission_classes = [permissions.AllowAny]
