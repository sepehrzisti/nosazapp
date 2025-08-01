from rest_framework import generics
from rest_framework import permissions
from .models import Vacium
from .serializers import VaciumSerializer


class VaciumView(generics.ListCreateAPIView):
    queryset = Vacium.objects.all()
    serializer_class = VaciumSerializer
    permission_classes = [permissions.AllowAny]