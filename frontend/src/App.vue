<template>
  <div class="min-h-screen bg-gray-100 flex">
    <aside class="w-64 bg-gray-900 text-white p-6">
      <h1 class="text-2xl font-bold mb-10">
        PetSystem
      </h1>

      <nav class="space-y-4">
        <RouterLink to="/clientes" class="block hover:text-blue-400 transition">
          Clientes
        </RouterLink>

        <RouterLink to="/produtos" class="block hover:text-blue-400 transition">
          Produtos
        </RouterLink>

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
        <RouterView />
      </div>
    </main>
  </div>
</template>