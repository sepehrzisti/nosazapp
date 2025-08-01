from rest_framework import generics ,permissions
from .models import FrontWork ,FrontWorkReject
from .serializers import FrontWorkSrializer , FrontWorkRejectSrializer

class FrontWorkView(generics.ListCreateAPIView):
        queryset = FrontWork.objects.all()
        serializer_class = FrontWorkSrializer
        permission_classes = [permissions.AllowAny]


class FrontWorkRejectView(generics.ListCreateAPIView):
        queryset = FrontWorkReject.objects.all()
        serializer_class = FrontWorkRejectSrializer
        permission_classes = [permissions.AllowAny]
