from .models import data

@admin.register(data)
class DataAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'age', 'email', 'created_at']
    actions = [export_data_to_csv]
