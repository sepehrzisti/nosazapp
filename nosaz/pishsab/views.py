from rest_framework import permissions, generics
from .models import PishSab,PishSabReject
from .serializers import PishSabRejectSrializer , PishSabSrializer



class PishsabView(generics.ListCreateAPIView):
    queryset = PishSab.objects.all()
    serializer_class = PishSabSrializer
    permission_classes = [permissions.AllowAny]

class PishSabRejectView(generics.ListCreateAPIView):
    queryset = PishSabReject.objects.all()
    serializer_class = PishSabRejectSrializer
    permission_classes = [permissions.AllowAny]