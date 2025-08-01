from django.contrib import admin
from frontwork.models import FrontWorkReject
from .models import SabReject,Sab
from managerfactory.models import Regects

@admin.register(Sab)
class SabAdmin(admin.ModelAdmin):
    list_display = ('IDCUPE', 'Elferam', 'slids', 'DataTime')

    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        if db_field.name == "IDCUPE":
            # گرفتن ID های استفاده‌شده
            used_ids = list(Sab.objects.exclude(IDCUPE=None).values_list('IDCUPE_id', flat=True))

            # اگر در حال ویرایش هستیم، مقدار فعلی را از لیست حذف کن
            object_id = request.resolver_match.kwargs.get('object_id') if request.resolver_match else None
            if object_id:
                try:
                    instance = Sab.objects.get(pk=object_id)
                    if instance.IDCUPE_id in used_ids:
                        used_ids.remove(instance.IDCUPE_id)
                except Sab.DoesNotExist:
                    pass

            qs = kwargs.get("queryset", db_field.remote_field.model.objects.all())
            kwargs["queryset"] = qs.exclude(IDCUPE_id__in=used_ids)

        return super().formfield_for_foreignkey(db_field, request, **kwargs)






@admin.register(SabReject)
class SabRejectAdmin(admin.ModelAdmin):
    list_display = ('SlabNumber', 'ResicetoSab', 'DataTime')

    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        object_id = request.resolver_match.kwargs.get('object_id') if request.resolver_match else None
        instance = None
        if object_id:
            try:
                instance = SabReject.objects.get(pk=object_id)
            except SabReject.DoesNotExist:
                pass

        # فیلتر برای SlabNumber
        if db_field.name == "SlabNumber":
            # فقط Regectsهایی که SabReject=True دارند
            qs = Regects.objects.filter(SabReject=True)

            # اسلب‌هایی که قبلاً استفاده شده‌اند
            used_ids = list(SabReject.objects.exclude(SlabNumber=None).values_list('SlabNumber_id', flat=True))

            # اگر رکورد فعلی در حال ویرایش است، خودش را از لیست حذف کنیم
            if instance and instance.SlabNumber_id in used_ids:
                used_ids.remove(instance.SlabNumber_id)

            kwargs["queryset"] = qs.exclude(id__in=used_ids)

        # فیلتر برای ResicetoSab
        if db_field.name == "ResicetoSab":
            qs = FrontWorkReject.objects.all()
            used_ids = list(SabReject.objects.exclude(ResicetoSab=None).values_list('ResicetoSab_id', flat=True))

            if instance and instance.ResicetoSab_id in used_ids:
                used_ids.remove(instance.ResicetoSab_id)

            kwargs["queryset"] = qs.exclude(id__in=used_ids)

        return super().formfield_for_foreignkey(db_field, request, **kwargs)



