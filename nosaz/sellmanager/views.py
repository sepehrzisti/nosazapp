from rest_framework.views import APIView
from rest_framework import permissions
from .models import Order
from .serializers import SellManagerSrializer
from rest_framework.response import Response



class SellManagerView(APIView):
    permission_classes = [permissions.AllowAny]
    def get_queryset(self):
        return Order.objects.all()

    def get(self, request):
        queryset = self.get_queryset()
        serializer = SellManagerSrializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = SellManagerSrializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
        return Response(serializer.data, status=201)
