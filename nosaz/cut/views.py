from rest_framework import permissions ,generics
from .models import Cut
from .serializers import CutSerializer


class CutView(generics.ListCreateAPIView):
    queryset = Cut.objects.all()
    serializer_class = CutSerializer
    permission_classes = [permissions.AllowAny]
