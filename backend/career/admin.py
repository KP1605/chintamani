from django.contrib import admin
from .models import Applicant


# Register your models here.
@admin.register(Applicant)
class ApplicantAdmin(admin.ModelAdmin):
    list_display = ("name", "email", "phone", "submitted_at")
    search_fields = ("name", "email", "phone")
    readonly_fields = ("submitted_at",)
