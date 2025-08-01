from django.contrib import admin
from .models import  TimeBackWork ,BackWorkReject
from storage.models import BackWorkMatrialStorage
from managerfactory.models import  Regects

@admin.register(BackWorkReject)
class BackWorkRejectAdmin(admin.ModelAdmin):
    list_display = ('SlabNumber', 'DataTime')

    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        if db_field.name == "SlabNumber":
            # فقط رکوردهایی که BackWorkToReject=True هستند
            qs = Regects.objects.filter(BackWorkToReject=True)

            # رکوردهای استفاده شده قبلی را بگیر
            used_slabs = list(BackWorkReject.objects.values_list('SlabNumber_id', flat=True))

            # اگر در حالت ویرایش هستیم، مقدار فعلی را از used_slabs حذف کن
            object_id = request.resolver_match.kwargs.get('object_id') if request.resolver_match else None
            if object_id:
                try:
                    instance = BackWorkReject.objects.get(pk=object_id)
                    if instance.SlabNumber_id in used_slabs:
                        used_slabs.remove(instance.SlabNumber_id)
                except BackWorkReject.DoesNotExist:
                    pass

            # فیلتر queryset به شکلی که رکوردهای استفاده شده حذف شوند
            kwargs["queryset"] = qs.exclude(id__in=used_slabs)

        return super().formfield_for_foreignkey(db_field, request, **kwargs)


@admin.register(TimeBackWork)
class TimeBackWorkAdmin(admin.ModelAdmin):
    list_display = ('IDCUPE', 'Elferam', 'DataTime')

    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        if db_field.name == "IDCUPE":
            used_ids = list(TimeBackWork.objects.exclude(IDCUPE=None).values_list('IDCUPE_id', flat=True))

            if request.resolver_match and request.resolver_match.kwargs.get('object_id'):
                object_id = request.resolver_match.kwargs['object_id']
                try:
                    instance = TimeBackWork.objects.get(pk=object_id)
                    if instance.IDCUPE_id in used_ids:
                        used_ids.remove(instance.IDCUPE_id)
                except TimeBackWork.DoesNotExist:
                    pass

            qs = kwargs.get('queryset', BackWorkMatrialStorage.objects.all())
            kwargs['queryset'] = qs.exclude(material_id__in=used_ids)

        return super().formfield_for_foreignkey(db_field, request, **kwargs)

