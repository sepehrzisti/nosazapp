from rest_framework import permissions ,generics
from .models import Sab , SabReject
from .serializers import SabSrializer , RejectSrializer




class sabView(generics.ListCreateAPIView):
    queryset = Sab.objects.all()
    serializer_class = SabSrializer
    permission_classes = [permissions.AllowAny]

class RejectView(generics.ListCreateAPIView):
    queryset = SabReject.objects.all()
    serializer_class = RejectSrializer
    permission_classes = [permissions.AllowAny]