from django.urls import path
from .views import CutView ,SizeView

urlpatterns = [
    path('cutcode/', CutView.as_view(), name='cut_code_view'),
    path('size/', SizeView.as_view(), name='size_view'),

]