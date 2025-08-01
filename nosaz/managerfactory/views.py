from rest_framework import generics ,permissions
from .models import Makesh,MaterialBackWork,MaterialFrontWork ,ProductionStone , Regects
from .serializers import MakeshSerializer,MaterialBackWorkSerializer,MaterialFrontWorkSrializer ,ProductionStoneSerializer ,RejectSrializer



class MaterialBackWorkView(generics.ListCreateAPIView):
    queryset = MaterialBackWork.objects.all()
    serializer_class = MaterialBackWorkSerializer
    permission_classes = [permissions.AllowAny]




class MaterialFrontWorkView(generics.ListCreateAPIView):
    queryset = MaterialFrontWork.objects.all()
    serializer_class = MaterialFrontWorkSrializer
    permission_classes = [permissions.AllowAny]


class MakeshWorkView(generics.ListCreateAPIView):
    queryset = Makesh.objects.all()
    serializer_class = MakeshSerializer
    permission_classes = [permissions.AllowAny]


class ProductionStoneView(generics.ListCreateAPIView):
    queryset = ProductionStone.objects.all()
    serializer_class = ProductionStoneSerializer
    permission_classes = [permissions.AllowAny]

class RejectView(generics.ListCreateAPIView):
    queryset = Regects.objects.all()
    serializer_class = RejectSrializer
    permission_classes = [permissions.AllowAny]

