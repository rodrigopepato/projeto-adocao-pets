<script setup>
import { ref, onMounted } from 'vue'
import api from '../services/api'

const clientes = ref([])

async function carregarClientes() {
  const response = await api.get('/clientes/')
  clientes.value = response.data
}

onMounted(() => {
  carregarClientes()
})
</script>

<template>
  <div>
    <h2 class="text-3xl font-bold text-gray-800 mb-6">
      Clientes
    </h2>

    <div class="grid gap-4">
      <div
        v-for="cliente in clientes"
        :key="cliente.id"
        class="bg-white rounded-2xl shadow p-5"
      >
        <h3 class="text-xl font-semibold text-gray-800">
          {{ cliente.nome }}
        </h3>

        <p class="text-gray-600">
          {{ cliente.email }}
        </p>
      </div>
    </div>
  </div>
</template>