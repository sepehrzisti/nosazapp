from django.contrib import admin
from .models import PishSab,PishSabReject
from managerfactory.models import Regects
from backwork.models import  BackWorkReject


@admin.register(PishSab)
class PishSabAdmin(admin.ModelAdmin):
    list_display = ('IDCUPE', 'slids', 'Elferam', 'DataTime')

    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        if db_field.name == "IDCUPE":
            # شناسه‌هایی که قبلاً استفاده شدند
            used_ids = list(PishSab.objects.exclude(IDCUPE=None).values_list('IDCUPE_id', flat=True))

            # اگر در حالت ویرایش هستیم، مورد فعلی را از لیست حذف کن
            object_id = request.resolver_match.kwargs.get('object_id') if request.resolver_match else None
            if object_id:
                try:
                    instance = PishSab.objects.get(pk=object_id)
                    if instance.IDCUPE_id in used_ids:
                        used_ids.remove(instance.IDCUPE_id)
                except PishSab.DoesNotExist:
                    pass

            # اعمال فیلتر نهایی
            qs = kwargs.get('queryset', db_field.remote_field.model.objects.all())
            kwargs['queryset'] = qs.exclude(IDCUPE_id__in=used_ids)

        return super().formfield_for_foreignkey(db_field, request, **kwargs)






from django.contrib import admin

@admin.register(PishSabReject)
class PishSabRejectAdmin(admin.ModelAdmin):
    list_display = ('SlabNumber', 'Resicetobackwork', 'DataTime')

    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        # فیلتر برای SlabNumber
        if db_field.name == "SlabNumber":
            qs = Regects.objects.filter(PishSabReject=True)
            used_slabs = list(PishSabReject.objects.values_list('SlabNumber_id', flat=True))
            if request.resolver_match and request.resolver_match.kwargs.get('object_id'):
                object_id = request.resolver_match.kwargs['object_id']
                try:
                    instance = PishSabReject.objects.get(pk=object_id)
                    if instance.SlabNumber_id in used_slabs:
                        used_slabs.remove(instance.SlabNumber_id)
                except PishSabReject.DoesNotExist:
                    pass
            kwargs["queryset"] = qs.exclude(id__in=used_slabs)

        # فیلتر برای Resicetobackwork
        if db_field.name == "Resicetobackwork":
            qs = BackWorkReject.objects.all()
            used_backworks = list(PishSabReject.objects.values_list('Resicetobackwork_id', flat=True))
            if request.resolver_match and request.resolver_match.kwargs.get('object_id'):
                object_id = request.resolver_match.kwargs['object_id']
                try:
                    instance = PishSabReject.objects.get(pk=object_id)
                    if instance.Resicetobackwork_id in used_backworks:
                        used_backworks.remove(instance.Resicetobackwork_id)
                except PishSabReject.DoesNotExist:
                    pass
            kwargs["queryset"] = qs.exclude(pk__in=used_backworks)

        return super().formfield_for_foreignkey(db_field, request, **kwargs)
