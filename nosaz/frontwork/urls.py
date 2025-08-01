from django.urls import path
from .views import FrontWorkView ,FrontWorkRejectView

urlpatterns = [
   path('frontwork/', FrontWorkView.as_view(), name='front_work_view'),
   path('reject_front_work/', FrontWorkRejectView.as_view(), name='reject_front_work_view'),

]