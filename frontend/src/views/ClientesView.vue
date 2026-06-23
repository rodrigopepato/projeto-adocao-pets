<script setup>
import { ref, onMounted } from 'vue'
import api from '../services/api'

const clientes = ref([])

const mostrarFormulario = ref(false)

const nome = ref('')
const cpf = ref('')
const email = ref('')
const telefone = ref('')
const endereco = ref('')

const carregando = ref(false)
const mensagemSucesso = ref('')
const mensagemErro = ref('')

async function carregarClientes() {
  const response = await api.get('/clientes/')
  clientes.value = response.data
}

function abrirFormulario() {
  mensagemSucesso.value = ''
  mensagemErro.value = ''
  mostrarFormulario.value = true
}

function fecharFormulario() {
  mostrarFormulario.value = false
  mensagemErro.value = ''
}

function limparFormulario() {
  nome.value = ''
  cpf.value = ''
  email.value = ''
  telefone.value = ''
  endereco.value = ''
}

async function cadastrarCliente() {
  mensagemSucesso.value = ''
  mensagemErro.value = ''
  carregando.value = true

  try {
    await api.post('/clientes/', {
      nome: nome.value,
      cpf: cpf.value,
      email: email.value,
      telefone: telefone.value,
      endereco: endereco.value,
    })

    mensagemSucesso.value = 'Cliente cadastrado com sucesso.'
    mostrarFormulario.value = false

    limparFormulario()
    await carregarClientes()
  } catch (error) {
    mensagemErro.value = 'Erro ao cadastrar cliente. Verifique os dados informados.'
  } finally {
    carregando.value = false
  }
}

onMounted(() => {
  carregarClientes()
})
</script>

<template>
  <div>
    <div class="mb-6 flex items-center justify-between">
      <div>
        <h2 class="text-3xl font-bold text-gray-800">
          Clientes
        </h2>
        <p class="text-gray-500 mt-1">
          Consulte e gerencie os clientes do sistema.
        </p>
      </div>

      <button
        type="button"
        @click="abrirFormulario"
        class="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg px-5 py-2 transition"
      >
        Novo cliente
      </button>
    </div>

    <div
      v-if="mensagemSucesso"
      class="mb-6 bg-green-50 border border-green-200 text-green-700 rounded-lg px-4 py-3"
    >
      {{ mensagemSucesso }}
    </div>

    <div
      v-if="mostrarFormulario"
      class="fixed inset-0 bg-slate-900/20 backdrop-blur-sm flex items-center justify-center z-50 px-4"
    >
      <div class="bg-white rounded-2xl shadow-xl p-6 w-full max-w-3xl">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-xl font-semibold text-gray-800">
            Cadastrar cliente
          </h3>

          <button
            type="button"
            @click="fecharFormulario"
            class="text-gray-500 hover:text-gray-800 text-2xl leading-none"
          >
            ×
          </button>
        </div>

        <form
          @submit.prevent="cadastrarCliente"
          class="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Nome
            </label>
            <input
              v-model="nome"
              type="text"
              required
              class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Nome completo"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              CPF
            </label>
            <input
              v-model="cpf"
              type="text"
              required
              class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="000.000.000-00"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              E-mail
            </label>
            <input
              v-model="email"
              type="email"
              required
              class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="cliente@email.com"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Telefone
            </label>
            <input
              v-model="telefone"
              type="text"
              required
              class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="(61) 99999-9999"
            />
          </div>

          <div class="md:col-span-2">
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Endereço
            </label>
            <input
              v-model="endereco"
              type="text"
              required
              class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Endereço completo"
            />
          </div>

          <div
            v-if="mensagemErro"
            class="md:col-span-2 bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3"
          >
            {{ mensagemErro }}
          </div>

          <div class="md:col-span-2 flex justify-end gap-3">
            <button
              type="button"
              @click="fecharFormulario"
              class="border border-gray-300 text-gray-700 font-semibold rounded-lg px-6 py-2 hover:bg-gray-50 transition"
            >
              Cancelar
            </button>

            <button
              type="submit"
              :disabled="carregando"
              class="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-semibold rounded-lg px-6 py-2 transition"
            >
              {{ carregando ? 'Salvando...' : 'Salvar cliente' }}
            </button>
          </div>
        </form>
      </div>
    </div>

    <div class="grid gap-4">
      <div
        v-for="cliente in clientes"
        :key="cliente.id"
        class="bg-white rounded-2xl shadow p-5"
      >
        <h3 class="text-xl font-semibold text-gray-800">
          {{ cliente.nome }}
        </h3>

        <div class="text-gray-600 mt-2 space-y-1">
          <p>
            <strong>CPF:</strong> {{ cliente.cpf }}
          </p>
          <p>
            <strong>E-mail:</strong> {{ cliente.email }}
          </p>
          <p>
            <strong>Telefone:</strong> {{ cliente.telefone }}
          </p>
          <p>
            <strong>Endereço:</strong> {{ cliente.endereco }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>