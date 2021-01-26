from django.urls import path
from .views import article_list, article_details

urlpatterns = [
    path('articles/', article_list, name='article_list'),
    path('articles/<int:id>/', article_details, name='article_details'),
]
