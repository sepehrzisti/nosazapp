# urls.py
from django.urls import path
from .views import export_filtered_excel

urlpatterns = [
    path('admin/export-with-dates/', export_filtered_excel, name='export-with-dates'),
]
