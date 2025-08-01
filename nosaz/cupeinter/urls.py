from django.urls import path
from .views import CutView

urlpatterns = [
    path('cupeinter/', CutView.as_view(), name='cupe_inter_view')
]