from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='Головна сторінка'),          # головна сторінка (/)
    path('about/', views.about, name='Про себе'),  # сторінка /about
]
