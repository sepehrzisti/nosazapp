from .models import  Regects ,ProductionStone , MaterialFrontWork  ,Makesh,MaterialBackWork
from django.contrib import admin
from cupeinter.models import CopeInter  # حتما باید ایمپورت کنی مدل رو
from cutcode.models import CutCode



@admin.register(ProductionStone)
class ProductionStoneAdmin(admin.ModelAdmin):
    list_display = ('IDCUPE', 'DataTime')

    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        if db_field.name == "IDCUPE":
            used_ids = list(ProductionStone.objects.values_list('IDCUPE', flat=True))

            # اگر در حالت ویرایش هستیم، مقدار فعلی را از used_ids حذف کن
            if request.resolver_match and request.resolver_match.kwargs.get('object_id'):
                object_id = request.resolver_match.kwargs['object_id']
                try:
                    instance = ProductionStone.objects.get(pk=object_id)
                    if instance.IDCUPE_id in used_ids:
                        used_ids.remove(instance.IDCUPE_id)
                except ProductionStone.DoesNotExist:
                    pass

            kwargs["queryset"] = CopeInter.objects.exclude(IDCUPE__in=used_ids)

        return super().formfield_for_foreignkey(db_field, request, **kwargs)


@admin.register(Makesh)
class MakeshAdmin(admin.ModelAdmin):
    list_display = ('IDCUPE', 'vacium', 'Boghche', 'DontUse', 'DataTime')

    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        if db_field.name == "IDCUPE":
            used_ids = list(Makesh.objects.exclude(IDCUPE=None).values_list('IDCUPE_id', flat=True))

            object_id = request.resolver_match.kwargs.get('object_id') if request.resolver_match else None
            if object_id:
                try:
                    instance = Makesh.objects.get(pk=object_id)
                    if instance.IDCUPE_id in used_ids:
                        used_ids.remove(instance.IDCUPE_id)
                except Makesh.DoesNotExist:
                    pass

            qs = kwargs.get("queryset", ProductionStone.objects.all())
            kwargs["queryset"] = qs.exclude(IDCUPE__in=used_ids)

        return super().formfield_for_foreignkey(db_field, request, **kwargs)



@admin.register(Regects)
class RegectsAdmin(admin.ModelAdmin):
    list_display = ('numslab', 'DataTime')

    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        if db_field.name == "numslab":
            # فرض بر اینکه این فیلد ForeignKey هست ولی اینجا numslab فیلد عددی است!
            # اگر numslab ForeignKey هست این کد کاربرد دارد، در غیر اینصورت حذف شود
            used_slabs = Regects.objects.values_list('numslab', flat=True)
            qs = CutCode.objects.all()
            qs = qs.exclude(IDCUPE_id__in=used_slabs)
            kwargs["queryset"] = qs
        return super().formfield_for_foreignkey(db_field, request, **kwargs)








@admin.register(MaterialBackWork)
class MaterialBackWorkAdmin(admin.ModelAdmin):
    list_display = ('cut_code', 'DataTime')

    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        if db_field.name == "cut_code":
            # گرفتن شناسه های استفاده شده (مقادیر cut_code_id که معادل IDCUPE_id مدل CutCode هستند)
            used_ids = list(MaterialBackWork.objects.exclude(cut_code=None).values_list('cut_code_id', flat=True))

            # اگر حالت ویرایش است، مقدار فعلی را حذف کن
            object_id = request.resolver_match.kwargs.get('object_id') if request.resolver_match else None
            if object_id:
                try:
                    instance = MaterialBackWork.objects.get(pk=object_id)
                    if instance.cut_code_id in used_ids:
                        used_ids.remove(instance.cut_code_id)
                except MaterialBackWork.DoesNotExist:
                    pass

            qs = kwargs.get('queryset', db_field.remote_field.model.objects.all())
            # فیلتر روی cut_code_id (که معادل IDCUPE_id است)
            kwargs['queryset'] = qs.exclude(IDCUPE_id__in=used_ids)

        return super().formfield_for_foreignkey(db_field, request, **kwargs)









@admin.register(MaterialFrontWork)
class MaterialFrontWorkAdmin(admin.ModelAdmin):
    list_display = ('cut_code', 'DataTime')  # اگر DataTime در مدل هست، نگهش دار

    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        if db_field.name == "cut_code":
            # گرفتن ID رکوردهایی که قبلاً استفاده شده‌اند
            used_ids = list(MaterialFrontWork.objects.exclude(cut_code=None).values_list('cut_code_id', flat=True))

            # حالت ویرایش: حذف رکورد فعلی از لیست ممنوع‌ها
            object_id = request.resolver_match.kwargs.get('object_id') if request.resolver_match else None
            if object_id:
                try:
                    instance = MaterialFrontWork.objects.get(pk=object_id)
                    if instance.cut_code_id in used_ids:
                        used_ids.remove(instance.cut_code_id)
                except MaterialFrontWork.DoesNotExist:
                    pass

            # تنظیم کوئری فیلتر شده
            kwargs['queryset'] = kwargs.get('queryset', db_field.remote_field.model.objects.all()).exclude(pk__in=used_ids)

        return super().formfield_for_foreignkey(db_field, request, **kwargs)



