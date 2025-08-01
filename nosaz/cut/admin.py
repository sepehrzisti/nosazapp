from django.contrib import admin
from .models import Cut
from vacium.models import Vacium  # حتما واردش کن

@admin.register(Cut)
class CutAdmin(admin.ModelAdmin):
    list_display = ('IDCUPE', 'Elferam', 'NumbersCut', 'DataTime')

    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        if db_field.name == "IDCUPE":
            # گرفتن شناسه‌های material_id که قبلاً استفاده شدند
            used_ids = list(Cut.objects.exclude(IDCUPE=None).values_list('IDCUPE_id', flat=True))

            # حذف مقدار فعلی در حالت ویرایش
            if request.resolver_match and request.resolver_match.kwargs.get('object_id'):
                object_id = request.resolver_match.kwargs['object_id']
                try:
                    instance = Cut.objects.get(pk=object_id)
                    if instance.IDCUPE_id in used_ids:
                        used_ids.remove(instance.IDCUPE_id)
                except Cut.DoesNotExist:
                    pass

            qs = kwargs.get("queryset", Vacium.objects.all())
            # فیلتر روی material_id (چون to_field = 'material_id')
            kwargs["queryset"] = qs.exclude(material_id__in=used_ids)

        return super().formfield_for_foreignkey(db_field, request, **kwargs)
