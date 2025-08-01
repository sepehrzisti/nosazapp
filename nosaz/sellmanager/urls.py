from django.urls import path
from .views import SellManagerView

urlpatterns = [
    path('sellmanager', SellManagerView.as_view(), name='sab_view'),
]