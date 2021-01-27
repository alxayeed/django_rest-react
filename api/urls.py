from django.urls import path, include
from .views import ArticleViewSet, UserViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('articles', ArticleViewSet, basename='article')
router.register('users', UserViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]
