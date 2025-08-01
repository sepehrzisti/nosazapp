from django.urls import path
from .views import VaciummaterialStorageView,FrontWorkMatrialStorageView,BackWorkMatrialStorageView

urlpatterns = [
    path('storage/vaciummaterial/', VaciummaterialStorageView.as_view(), name='storage_vacium_matrial_view'),
    path('storage/frontworkmatrial/', FrontWorkMatrialStorageView.as_view(), name='storage_front_work_matrial_view'),
    path('storage/backworkmatrial/', BackWorkMatrialStorageView.as_view(), name='storage_back_work_matrial_view'),
]