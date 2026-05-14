<template>
  <div class="min-h-screen bg-gray-100 flex">
    
    <aside class="w-64 bg-gray-900 text-white p-6">
      <h1 class="text-2xl font-bold mb-10">
        PetSystem
      </h1>

      <nav class="space-y-4">
        <a href="#" class="block hover:text-blue-400 transition">
          Clientes
        </a>

        <a href="#" class="block hover:text-blue-400 transition">
          Produtos
        </a>

        <a href="#" class="block hover:text-blue-400 transition">
          Vendas
        </a>

        <a href="#" class="block hover:text-blue-400 transition">
          Relatórios
        </a>
      </nav>
    </aside>

    <main class="flex-1 p-8">
      <div class="max-w-5xl mx-auto">

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
    </main>

  </div>
</template>