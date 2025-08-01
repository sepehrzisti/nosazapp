from django.contrib import admin
from .models import Ferez, SizeFerez


class FerezInline(admin.TabularInline):
    model = SizeFerez  # فقط یک مدل
    extra = 1
    min_num = 1
    max_num = 100
    can_delete = True
    show_change_link = True


class FerezAdmin(admin.ModelAdmin):
    inlines = [FerezInline]

    class Meta:
        model = Ferez


admin.site.register(Ferez, FerezAdmin)
