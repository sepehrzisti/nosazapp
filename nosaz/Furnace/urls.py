from django.urls import path
from .views import FurnaceView

urlpatterns = [
   path('furnace/', FurnaceView.as_view(), name='furnace_view'),
]