from django.db.models import Sum
from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Venda
from .serializers import VendaSerializer


class VendaViewSet(viewsets.ModelViewSet):
    queryset = Venda.objects.all().order_by('-data_venda')
    serializer_class = VendaSerializer


@api_view(['GET'])
def relatorio_vendas(request):
    data_inicio = request.GET.get('data_inicio')
    data_fim = request.GET.get('data_fim')

    vendas = Venda.objects.all().order_by('-data_venda')

    if data_inicio and data_fim:
        vendas = vendas.filter(data_venda__date__range=[data_inicio, data_fim])

    quantidade_vendas = vendas.count()
    valor_total = vendas.aggregate(total=Sum('valor_total'))['total'] or 0

    serializer = VendaSerializer(vendas, many=True)

    return Response({
        'quantidade_vendas': quantidade_vendas,
        'valor_total': valor_total,
        'vendas': serializer.data
    })