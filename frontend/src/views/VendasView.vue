<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const vendas = ref([])

async function carregarVendas() {
  const response = await axios.get('http://127.0.0.1:8000/api/vendas/')
  vendas.value = response.data
}

onMounted(() => {
  carregarVendas()
})
</script>

<template>
  <div>
    <h2 class="text-3xl font-bold text-gray-800 mb-6">
      Vendas
    </h2>

    <div class="grid gap-4">
      <div
        v-for="venda in vendas"
        :key="venda.id"
        class="bg-white rounded-2xl shadow p-5"
      >
        <h3 class="text-xl font-semibold text-gray-800">
          Venda #{{ venda.id }}
        </h3>

        <p class="text-gray-600">
          Cliente ID: {{ venda.cliente }}
        </p>

        <p class="text-gray-800 mt-2">
          Total: R$ {{ venda.valor_total }}
        </p>

        <p class="text-gray-500 text-sm">
          Data: {{ venda.data_venda }}
        </p>
      </div>
    </div>
  </div>
</template>