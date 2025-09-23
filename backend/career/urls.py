from django.urls import path
from .views import submit_application

urlpatterns = [
    path("submit-application/", submit_application, name="submit-application"),
]
