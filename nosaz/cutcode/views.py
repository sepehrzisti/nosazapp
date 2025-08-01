from rest_framework import generics
from rest_framework import permissions
from .models import CutCode , Size
from .serializers import CutCodeSerializer ,SizeSerializer


class CutView(generics.ListCreateAPIView):
    queryset = CutCode.objects.all()
    serializer_class = CutCodeSerializer
    permission_classes = [permissions.AllowAny]



class SizeView(generics.ListCreateAPIView):
    queryset = Size.objects.all()
    serializer_class = SizeSerializer
    permission_classes = [permissions.AllowAny]