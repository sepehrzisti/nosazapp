from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Profile

class ProfileAdmin(UserAdmin):
    # این فیلدها در لیست کاربران نمایش داده می‌شوند
    list_display = ('username', 'email', 'phone', 'role', 'is_staff', 'is_active')

    # اضافه کردن فیلدهای دلخواه به فرم اضافه/ویرایش
    fieldsets = UserAdmin.fieldsets + (
        (None, {'fields': ('phone', 'role')}),
    )

    # اگر دوست داشتید در فرم ایجاد کاربر هم فیلد اضافه شود:
    add_fieldsets = UserAdmin.add_fieldsets + (
        (None, {'fields': ('phone', 'role')}),
    )

admin.site.register(Profile, ProfileAdmin)



