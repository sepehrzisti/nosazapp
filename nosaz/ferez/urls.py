from django.urls import path
from .views import FerezView ,SizeFerezView

urlpatterns = [
    path('ferez/', FerezView.as_view(), name='ferez_view'),
    path('size_ferez/', SizeFerezView.as_view(), name='size_ferez_view'),

]