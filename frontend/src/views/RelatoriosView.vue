<script setup>
import { ref, onMounted } from 'vue'
import api from '../services/api'

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

import { Bar } from 'vue-chartjs'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
)

const chartData = ref({
  labels: [],
  datasets: [
    {
      label: 'Valor das Vendas',
      data: []
    }
  ]
})

async function carregarRelatorio() {
  const response = await api.get('/relatorios/vendas/')

  chartData.value = {
    labels: response.data.vendas.map(
      venda => `Venda #${venda.id}`
    ),
    datasets: [
      {
        label: 'Valor das Vendas',
        data: response.data.vendas.map(
          venda => Number(venda.valor_total)
        )
      }
    ]
  }
}

onMounted(() => {
  carregarRelatorio()
})
</script>

<template>
  <div>
    <h2 class="text-3xl font-bold text-gray-800 mb-6">
      Relatório de Vendas
    </h2>

    <div class="bg-white rounded-2xl shadow p-6">
      <Bar :data="chartData" />
    </div>
  </div>
</template>