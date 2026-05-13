<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const clientes = ref([])

async function carregarClientes() {
  const response = await axios.get('http://127.0.0.1:8000/api/clientes/')
  clientes.value = response.data
}

onMounted(() => {
  carregarClientes()
})
</script>

<template>
  <main>
    <h1>Sistema de Adoção de Pets</h1>

    <section>
      <h2>Clientes</h2>

      <ul>
        <li v-for="cliente in clientes" :key="cliente.id">
          {{ cliente.nome }} - {{ cliente.email }}
        </li>
      </ul>
    </section>
  </main>
</template>