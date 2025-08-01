from rest_framework import generics ,permissions
from .models import TimeBackWork ,BackWorkReject
from .serializers import BackWorkSerializer , BackWorkRejectSrializer

class BackWorkView(generics.ListCreateAPIView):
        queryset = TimeBackWork.objects.all()
        serializer_class = BackWorkSerializer
        permission_classes = [permissions.AllowAny]

class BackWorkRejectView(generics.ListCreateAPIView):
        queryset = BackWorkReject.objects.all()
        serializer_class = BackWorkRejectSrializer
        permission_classes = [permissions.AllowAny]


