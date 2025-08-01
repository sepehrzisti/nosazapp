# forms.py
from django import forms

class DateRangeForm(forms.Form):
    start_date = forms.DateField(label="از تاریخ", widget=forms.DateInput(attrs={'type': 'date'}))
    end_date = forms.DateField(label="تا تاریخ", widget=forms.DateInput(attrs={'type': 'date'}))
