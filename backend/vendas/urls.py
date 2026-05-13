from django.urls import path
from rest_framework.routers import DefaultRouter

from .views import VendaViewSet, relatorio_vendas

router = DefaultRouter()
router.register(r'vendas', VendaViewSet)

urlpatterns = router.urls + [
    path('relatorios/vendas/', relatorio_vendas),
]