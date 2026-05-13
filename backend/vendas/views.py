from rest_framework import viewsets

from .models import Venda
from .serializers import VendaSerializer


class VendaViewSet(viewsets.ModelViewSet):
    queryset = Venda.objects.all().order_by('-data_venda')
    serializer_class = VendaSerializer