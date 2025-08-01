from django.contrib import admin
from .models import Vacium


@admin.register(Vacium)
class VaciumAdmin(admin.ModelAdmin):
    list_display = ('material', 'DataTime')

    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        if db_field.name == "material":
            # گرفتن شناسه‌هایی که قبلا استفاده شدند (از فیلد material_id نه id)
            used_ids = list(Vacium.objects.exclude(material=None).values_list('material__material_id', flat=True))

            # حذف مقدار فعلی در ویرایش
            if request.resolver_match and request.resolver_match.kwargs.get('object_id'):
                object_id = request.resolver_match.kwargs['object_id']
                try:
                    instance = Vacium.objects.get(pk=object_id)
                    if instance.material and instance.material.material_id in used_ids:
                        used_ids.remove(instance.material.material_id)
                except Vacium.DoesNotExist:
                    pass

            qs = kwargs.get("queryset", db_field.remote_field.model.objects.all())
            kwargs["queryset"] = qs.exclude(material_id__in=used_ids)

        return super().formfield_for_foreignkey(db_field, request, **kwargs)
