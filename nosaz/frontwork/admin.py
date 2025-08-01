from django.contrib import admin
from .models import FrontWork, FrontWorkReject
from managerfactory.models import Regects
from backwork.models import BackWorkReject
from pishsab.models import PishSabReject


@admin.register(FrontWorkReject)
class FrontWorkRejectAdmin(admin.ModelAdmin):
    list_display = ('SlabNumber', 'Resicetobackwork', 'DataTime')

    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        if db_field.name == "SlabNumber":
            # فقط رکوردهای Regects که FrontWorkToReject=True دارند
            qs = Regects.objects.filter(FrontWorkToReject=True)

            # آی‌دی‌های اسلب‌هایی که قبلاً استفاده شده‌اند
            used_slabs = list(FrontWorkReject.objects.values_list('SlabNumber_id', flat=True))

            # اگر در حالت ویرایش هستیم، رکورد فعلی رو حذف کن تا در لیست باقی بمونه
            if request.resolver_match and request.resolver_match.kwargs.get('object_id'):
                object_id = request.resolver_match.kwargs['object_id']
                try:
                    instance = FrontWorkReject.objects.get(pk=object_id)
                    if instance.SlabNumber_id in used_slabs:
                        used_slabs.remove(instance.SlabNumber_id)
                except FrontWorkReject.DoesNotExist:
                    pass

            kwargs['queryset'] = qs.exclude(id__in=used_slabs)

        elif db_field.name == "Resicetobackwork":
            # همه PishSabReject ها
            qs = PishSabReject.objects.all()

            # آی‌دی‌های Resicetobackwork که قبلاً استفاده شده‌اند
            used_backworks = list(FrontWorkReject.objects.values_list('Resicetobackwork_id', flat=True))

            if request.resolver_match and request.resolver_match.kwargs.get('object_id'):
                object_id = request.resolver_match.kwargs['object_id']
                try:
                    instance = FrontWorkReject.objects.get(pk=object_id)
                    if instance.Resicetobackwork_id in used_backworks:
                        used_backworks.remove(instance.Resicetobackwork_id)
                except FrontWorkReject.DoesNotExist:
                    pass

            kwargs['queryset'] = qs.exclude(pk__in=used_backworks)

        return super().formfield_for_foreignkey(db_field, request, **kwargs)






@admin.register(FrontWork)
class FrontWorkAdmin(admin.ModelAdmin):
    list_display = ('IDCUPE', 'Elferam', 'DataTime')

    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        if db_field.name == "IDCUPE":
            # گرفتن لیست material_idهایی که قبلاً استفاده شده‌اند
            used_ids = list(FrontWork.objects.exclude(IDCUPE=None).values_list('IDCUPE_id', flat=True))

            # در حالت ویرایش، مقدار فعلی را از لیست حذف کن
            object_id = request.resolver_match.kwargs.get('object_id') if request.resolver_match else None
            if object_id:
                try:
                    instance = FrontWork.objects.get(pk=object_id)
                    if instance.IDCUPE_id in used_ids:
                        used_ids.remove(instance.IDCUPE_id)
                except FrontWork.DoesNotExist:
                    pass

            # کوئری‌ست نهایی: حذف مقادیر استفاده‌شده به جز مقدار فعلی
            qs = kwargs.get('queryset', db_field.remote_field.model.objects.all())
            kwargs['queryset'] = qs.exclude(material_id__in=used_ids)

        return super().formfield_for_foreignkey(db_field, request, **kwargs)
