from rest_framework import permissions ,generics
from .models import FrontWorkMatrialStorage,BackWorkMatrialStorage,VaciumMaterialStorage
from .serializers import FrontWorkMatrialStorageSerializer,BackWorkMatrialStorageSerializer,VaciumStorageSerializer



class BackWorkMatrialStorageView(generics.ListCreateAPIView):
    queryset = BackWorkMatrialStorage.objects.all()
    serializer_class = BackWorkMatrialStorageSerializer
    permission_classes = [permissions.AllowAny]

class FrontWorkMatrialStorageView(generics.ListCreateAPIView):
    queryset = FrontWorkMatrialStorage.objects.all()
    serializer_class = FrontWorkMatrialStorageSerializer
    permission_classes = [permissions.AllowAny]


class VaciummaterialStorageView(generics.ListCreateAPIView):
        queryset = VaciumMaterialStorage.objects.all()
        serializer_class = VaciumStorageSerializer
        permission_classes = [permissions.AllowAny]
