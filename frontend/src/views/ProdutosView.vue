<script setup>
import { ref, onMounted } from 'vue'
import api from '../services/api'

const produtos = ref([])

async function carregarProdutos() {
  const response = await api.get('/produtos/')
  produtos.value = response.data
}

onMounted(() => {
  carregarProdutos()
})
</script>

<template>
  <div>
    <h2 class="text-3xl font-bold text-gray-800 mb-6">
      Produtos
    </h2>

    <div class="grid gap-4">
      <div
        v-for="produto in produtos"
        :key="produto.id"
        class="bg-white rounded-2xl shadow p-5"
      >
        <h3 class="text-xl font-semibold text-gray-800">
          {{ produto.nome }}
        </h3>

        <p class="text-gray-600">
          {{ produto.descricao }}
        </p>

        <p class="text-gray-800 mt-2">
          Preço: R$ {{ produto.preco }}
        </p>

        <p class="text-gray-800">
          Estoque: {{ produto.quantidade_estoque }}
        </p>
      </div>
    </div>
  </div>
</template>