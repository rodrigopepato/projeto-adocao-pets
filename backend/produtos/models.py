from django.db import models

class Produto(models.Model):
    nome = models.CharField(max_length=100)
    descricao = models.CharField(max_length=200, blank=True, null=True)
    preco = models.DecimalField(max_digits=10, decimal_places=2)
    quantidade_estoque = models.IntegerField()
    estoque_minimo = models.IntegerField()

    def __str__(self):
        return self.nome
