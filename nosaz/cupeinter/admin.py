from django.contrib import admin
from .models import CopeInter


class CopeInterAdmin(admin.ModelAdmin):
    search_fields = ['IDCUPE', 'NameStone', 'CupeType', 'CupeHeight', 'CupeWeight', 'CupeWidth', 'CupeOwner', 'CarThreeNumber', 'CarAlfabet', 'CarTwoNumber', 'DataTime']
    list_display = ['IDCUPE', 'NameStone', 'CupeType', 'CupeHeight', 'CupeWeight', 'CupeWidth', 'CupeOwner', 'CarThreeNumber', 'CarAlfabet', 'CarTwoNumber', 'DataTime']

admin.site.register(CopeInter , CopeInterAdmin)