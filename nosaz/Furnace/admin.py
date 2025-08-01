from django.contrib import admin
from .models import furnace
from cut.models import Cut  # حتما واردش کن

@admin.register(furnace)
class FurnaceAdmin(admin.ModelAdmin):
    list_display = ('IDCUPE', 'DataTime')

    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        if db_field.name == "IDCUPE":
            used_cut_ids = list(furnace.objects.exclude(IDCUPE=None).values_list('IDCUPE_id', flat=True))

            if request.resolver_match and request.resolver_match.kwargs.get('object_id'):
                object_id = request.resolver_match.kwargs['object_id']
                try:
                    instance = furnace.objects.get(pk=object_id)
                    if instance.IDCUPE_id in used_cut_ids:
                        used_cut_ids.remove(instance.IDCUPE_id)
                except furnace.DoesNotExist:
                    pass

            qs = kwargs.get('queryset', db_field.remote_field.model.objects.all())
            # فیلتر روی فیلد IDCUPE_id (to_field)
            kwargs['queryset'] = qs.exclude(IDCUPE_id__in=used_cut_ids)

        return super().formfield_for_foreignkey(db_field, request, **kwargs)


