"""
URL configuration for nosaz project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path ,include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/',include('backwork.urls')),
    path('api/', include('cupeinter.urls')),
    path('api/', include('cut.urls')),
    path('api/', include('cutcode.urls')),
    path('api/', include('frontwork.urls')),
    path('api/', include('Furnace.urls')),
    path('api/', include('managerfactory.urls')),
    path('api/', include('pishsab.urls')),
    path('api/', include('sab.urls')),
    path('api/', include('sellmanager.urls')),
    path('api/', include('vacium.urls')),
    path('api/', include('storage.urls')),
    path('api/auth/', include('users.urls')),
    path('api/', include('data.urls')),

]
