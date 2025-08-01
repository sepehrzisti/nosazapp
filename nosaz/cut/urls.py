from django.urls import path
from .views import CutView

urlpatterns = [
    path('cut/', CutView.as_view(), name='cut_view'),
]