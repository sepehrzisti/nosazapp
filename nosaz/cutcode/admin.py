from django.contrib import admin
from .models import CutCode, Size
from Furnace.models import furnace

class SizeInline(admin.TabularInline):
    model = Size
    extra = 1
    min_num = 1
    max_num = 100
    can_delete = True
    show_change_link = True

@admin.register(CutCode)
class CutCodeAdmin(admin.ModelAdmin):
    inlines = [SizeInline]
    list_display = ('IDCUPE', 'NoteCutCode', 'DataTime')

    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        if db_field.name == "IDCUPE":
            used_ids = list(CutCode.objects.values_list('IDCUPE', flat=True))

            # اگر در حالت ویرایش هستیم → نمونه فعلی رو از used_ids حذف کنیم
            if request.resolver_match and request.resolver_match.kwargs.get('object_id'):
                object_id = request.resolver_match.kwargs['object_id']
                try:
                    instance = CutCode.objects.get(pk=object_id)
                    if instance.IDCUPE_id in used_ids:
                        used_ids.remove(instance.IDCUPE_id)
                except CutCode.DoesNotExist:
                    pass

            qs = kwargs.get("queryset", furnace.objects.all())
            kwargs["queryset"] = qs.exclude(IDCUPE_id__in=used_ids)

        return super().formfield_for_foreignkey(db_field, request, **kwargs)

