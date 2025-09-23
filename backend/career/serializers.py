from rest_framework import serializers
from .models import Applicant


class ApplicantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Applicant
        fields = "__all__"

    def validate_resume(self, value):
        # optional: check file type/size
        allowed = [
            "application/pdf",
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ]
        if value.content_type not in allowed:
            raise serializers.ValidationError("Only PDF / DOC / DOCX are allowed.")
        if value.size > 5 * 1024 * 1024:  # 5MB limit
            raise serializers.ValidationError("Resume file too large (max 5MB).")
        return value

    def validate_phone(self, value):
        if not value.isdigit() or len(value) < 7 or len(value) > 15:
            raise serializers.ValidationError("Enter a valid phone number.")
        return value

    def validate(self, data):
        if Applicant.objects.filter(email=data["email"]).exists():
            raise serializers.ValidationError(
                "An application with this email already exists."
            )
        return data
