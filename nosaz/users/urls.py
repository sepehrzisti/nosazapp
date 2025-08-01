from django.urls import path, include
from .views import CustomLoginView , ProfileCreateView
urlpatterns = [
    path('login/', CustomLoginView.as_view(), name='login'),
    path('register/', ProfileCreateView.as_view(), name='register'),]