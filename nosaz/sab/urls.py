from django.urls import path
from .views import sabView,RejectView

urlpatterns = [
    path('sab/', sabView.as_view(), name='sab_view'),
    path('sabreject/', RejectView.as_view(), name='sab_reject_view'),
]