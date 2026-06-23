<template>
  <div class="min-h-screen flex items-center justify-center bg-slate-100 px-4">
    <div class="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
      <div class="mb-8 text-center">
        <h1 class="text-3xl font-bold text-slate-800">
          Adoção de Pets
        </h1>
        <p class="text-slate-500 mt-2">
          Acesse o sistema de gestão
        </p>
      </div>

      <form @submit.prevent="login" class="space-y-5">
        <div>
          <label class="block text-sm font-medium text-slate-700 mb-1">
            Usuário
          </label>
          <input
            v-model="username"
            type="text"
            class="w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Digite seu usuário"
            required
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-slate-700 mb-1">
            Senha
          </label>
          <input
            v-model="password"
            type="password"
            class="w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Digite sua senha"
            required
          />
        </div>

        <div
          v-if="erro"
          class="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3"
        >
          {{ erro }}
        </div>

        <button
          type="submit"
          :disabled="carregando"
          class="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-semibold rounded-lg py-2 transition"
        >
          {{ carregando ? 'Entrando...' : 'Entrar' }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()

const username = ref('')
const password = ref('')
const erro = ref('')
const carregando = ref(false)

async function login() {
  erro.value = ''
  carregando.value = true

  try {
    const response = await axios.post('http://127.0.0.1:8000/api/token/', {
      username: username.value,
      password: password.value
    })

    localStorage.setItem('access_token', response.data.access)
    localStorage.setItem('refresh_token', response.data.refresh)

    router.push('/relatorios')
  } catch (error) {
    erro.value = 'Usuário ou senha inválidos.'
  } finally {
    carregando.value = false
  }
}
</script>