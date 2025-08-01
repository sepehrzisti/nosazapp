from django.contrib import admin
from .models import BackWorkMatrialStorage,FrontWorkMatrialStorage,VaciumMaterialStorage
from .forms import BackWorkMatrialStorageForm , FrontWorkMatrialStorageForm
from managerfactory.models import MaterialBackWork


@admin.register(VaciumMaterialStorage)
class VaciumMaterialStorageAdmin(admin.ModelAdmin):
    list_display = (
        'material', 'tori400', 'toridocupe', 'torivacium', 'lolerodei', 'lolevacium',
        'pelastic', 'epocsivacium', 'zhelvacium', 'rezin', 'chasbeghiri',
        'chasbedotarafe', 'chasbe123', 'mayea123', 'DataTime'
    )

    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        if db_field.name == "material":
            used_ids = list(
                VaciumMaterialStorage.objects.values_list('material__IDCUPE_id', flat=True)
            )

            # اگر در حالت ویرایش هستیم، مقدار فعلی را از لیست حذف کن
            if request.resolver_match and request.resolver_match.kwargs.get('object_id'):
                object_id = request.resolver_match.kwargs['object_id']
                try:
                    instance = VaciumMaterialStorage.objects.get(pk=object_id)
                    if instance.material.IDCUPE_id in used_ids:
                        used_ids.remove(instance.material.IDCUPE_id)
                except VaciumMaterialStorage.DoesNotExist:
                    pass

            qs = kwargs.get("queryset", db_field.remote_field.model.objects.all())
            kwargs["queryset"] = qs.exclude(IDCUPE_id__in=used_ids)

        return super().formfield_for_foreignkey(db_field, request, **kwargs)






@admin.register(BackWorkMatrialStorage)
class BackWorkMatrialStorageAdmin(admin.ModelAdmin):
    form = BackWorkMatrialStorageForm
    list_display = ('material_display', 'epocsi', 'zhel', 'mastic', 'rezin', 'bakiye', 'tori')

    def material_display(self, obj):
        return str(obj.material) if obj.material else "-"
    material_display.short_description = 'Material'

    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        if db_field.name == "material":
            used_ids = list(BackWorkMatrialStorage.objects.values_list('material_id', flat=True))

            if request.resolver_match and request.resolver_match.kwargs.get('object_id'):
                object_id = request.resolver_match.kwargs['object_id']
                try:
                    instance = BackWorkMatrialStorage.objects.get(pk=object_id)
                    if instance.material_id in used_ids:
                        used_ids.remove(instance.material_id)
                except BackWorkMatrialStorage.DoesNotExist:
                    pass

            qs = kwargs.get("queryset", MaterialBackWork.objects.all())
            kwargs["queryset"] = qs.exclude(cut_code__in=used_ids)

        return super().formfield_for_foreignkey(db_field, request, **kwargs)






@admin.register(FrontWorkMatrialStorage)
class FrontWorkMatrialStorageAdmin(admin.ModelAdmin):
    form = FrontWorkMatrialStorageForm
    list_display = ('material_display', 'epocsi', 'zhel', 'mastic', 'rezin', 'bakiye', 'tori', 'DataTime')

    def material_display(self, obj):
        return str(obj.material) if obj.material else "-"
    material_display.short_description = 'Material'

    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        if db_field.name == "material":
            used_ids = list(FrontWorkMatrialStorage.objects.values_list('material_id', flat=True))

            object_id = request.resolver_match.kwargs.get('object_id') if request.resolver_match else None
            if object_id:
                try:
                    instance = FrontWorkMatrialStorage.objects.get(pk=object_id)
                    if instance.material_id in used_ids:
                        used_ids.remove(instance.material_id)
                except FrontWorkMatrialStorage.DoesNotExist:
                    pass

            qs = kwargs.get("queryset", db_field.remote_field.model.objects.all())
            kwargs["queryset"] = qs.exclude(pk__in=used_ids)

        return super().formfield_for_foreignkey(db_field, request, **kwargs)

