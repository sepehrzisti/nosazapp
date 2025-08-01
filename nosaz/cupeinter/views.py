from rest_framework import permissions ,generics
from .models import CopeInter
from .serializers import CupeinterSrializer

class CutView(generics.ListCreateAPIView):
    queryset = CopeInter.objects.all()
    serializer_class = CupeinterSrializer
    permission_classes = [permissions.AllowAny]