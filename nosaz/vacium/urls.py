from django.urls import path
from .views import VaciumView

urlpatterns = [
    path('vaciumview/', VaciumView.as_view(), name='vacium_view'),
]