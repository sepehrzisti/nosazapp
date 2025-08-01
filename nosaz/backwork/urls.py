from django.urls import path
from .views import BackWorkView , BackWorkRejectView

urlpatterns = [
   path('backwork/', BackWorkView.as_view(), name='back_work_view'),
   path('backworkreject/', BackWorkRejectView.as_view(), name='back_work_reject_view'),

]