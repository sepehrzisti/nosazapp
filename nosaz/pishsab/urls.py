from django.urls import path
from .views import PishsabView,PishSabRejectView

urlpatterns = [
    path('pish_sab/', PishsabView.as_view(), name='pishsab_view'),
    path('pish_sab_reject/', PishSabRejectView.as_view(), name='pishsab_reject_view'),
]