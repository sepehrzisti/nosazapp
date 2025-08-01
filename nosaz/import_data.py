import os
import django
import pandas as pd
from django.utils import timezone
import pytz

tz = pytz.timezone("Asia/Tehran")  # یا timezone خودت

# تنظیم جنگو
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'nosaz.settings')
django.setup()

from cupeinter.models import CopeInter

# خواندن فایل اکسل
df = pd.read_excel('dbnosaz.xlsm', engine='openpyxl')



# expected_columns = {
#     'کد کوپ': 'IDCUPE',
#     'نام کوپ': 'NameStone',
#     'نوع کوپ': 'CupeType',
#     'ارتفاع کوپ': 'CupeHeight',
#     'وزن': 'CupeWeight',
#     'عرض کوپ': 'CupeWidth',
#     'نام مالک': 'CupeOwner',
#     'طول کوپ': 'CarThreeNumber',
#     'تاریخ ورود': 'DataTime'
# }
#
# # بررسی هر ردیف و چاپ شماره ردیف‌هایی که ناقص هستند
# for index, row in df.iterrows():
#     missing_columns = [col for col in expected_columns if pd.isna(row.get(col))]
#     if missing_columns:
#         print(f"❌ ردیف {index + 2} دارای مقادیر خالی در ستون‌های: {missing_columns}")





all_copes = CopeInter.objects.all().order_by('IDCUPE')

seen = set()
for cope in all_copes:
    if cope.IDCUPE in seen:
        cope.delete()  # حذف رکورد تکراری
    else:
        seen.add(cope.IDCUPE)

print("✅ رکوردهای تکراری بر اساس IDCUPE حذف شدند.")




# # تکرار روی ردیف‌ها
# for _, row in df.iterrows():
#     if pd.isna(row['کد کوپ']):
#         continue
#
#     try:
#         raw_date = pd.to_datetime(row['تاریخ ورود'], errors='coerce')
#         aware_date = tz.localize(raw_date) if raw_date is not pd.NaT else timezone.now()
#
#         obj, created = CopeInter.objects.update_or_create(
#             IDCUPE=int(row['کد کوپ']),
#             defaults={
#                 'NameStone': row['نام کوپ'],
#                 'CupeType': row['نوع کوپ'],
#                 'CupeHeight': str(row['ارتفاع کوپ']),
#                 'CupeWeight': str(row['وزن']),
#                 'CupeWidth': str(row['عرض کوپ']),
#                 'CupeOwner': row['نام مالک'],
#                 'CupeLength': int(row['طول کوپ']),
#                 'CarThreeNumber': 0,
#                 'CarAlfabet': '---',
#                 'DataTime': aware_date,
#             }
#         )
#         action = "ساخته شد" if created else "آپدیت شد"
#         print(f"✅ رکورد با کد کوپ {int(row['کد کوپ'])} {action}.")
#     except Exception as e:
#         print(f"❌ خطا در ردیف با کد کوپ {row.get('کد کوپ')}: {e}")