from django.urls import path
from .views import MaterialBackWorkView, MakeshWorkView, MaterialFrontWorkView, ProductionStoneView ,RejectView

urlpatterns = [
    path('manager/materialbackwork/', MaterialBackWorkView.as_view(), name='material_back_work_view'),
    path('manager/materialvacium/', MakeshWorkView.as_view(), name='material_vacium_view'),
    path('manager/matrialfrontwork/', MaterialFrontWorkView.as_view(), name='material_front_work_view'),
    path('manager/stonductionstone/', ProductionStoneView.as_view(), name='Production_Stone_view'),
    path('manager/reject/', RejectView.as_view(), name='reject_view'),
]