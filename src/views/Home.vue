<template>
  <div class="flex flex-col items-center text-center p-8">
    <!-- FOTO -->
    <img
      src="/public/foto-marcelo.jpg"
      alt="Foto de Marcelo Nascimento"
      class="w-40 h-40 rounded-full shadow-lg mb-6 object-cover"
    />

    <!-- APRESENTAÇÃO -->
    <h1 class="text-4xl font-bold mb-2">E aí! Eu sou o Marcelo 👋</h1>
    <p class="text-lg max-w-xl text-white-700">
      Tenho 18 anos, sou estudante de Análise e Desenvolvimento de Sistemas na UNIMAR e trabalho como Jovem Aprendiz de RH na Marilan.
      Gosto de tecnologia e, nas horas vagas, curto jogar online, assistir animes e praticar meu basquete.
    </p>

    <!-- CARDS DESTAQUE -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 max-w-4xl w-full">
      <div class="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-xl shadow-xl hover:shadow-2xl transition-shadow p-4 border border-gray-200 dark:border-gray-700">
        <h3 class="text-lg font-semibold text-white-800">🎓 Estudante de ADS</h3>
        <p class="text-sm text-white-600 mt-1">Cursando na UNIMAR, buscando evoluir como desenvolvedor.</p>
      </div>
      <div class="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-xl shadow-xl hover:shadow-2xl transition-shadow p-4 border border-gray-200 dark:border-gray-700">
        <h3 class="text-lg font-semibold text-white-800">💼 Jovem Aprendiz</h3>
        <p class="text-sm text-white-600 mt-1">Atuando no RH da Marilan com foco em tarefas administrativas e organização.</p>
      </div>
      <div class="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-xl shadow-xl hover:shadow-2xl transition-shadow p-4 border border-gray-200 dark:border-gray-700">
        <h3 class="text-lg font-semibold text-white-800">🏀 Hobbies</h3>
        <p class="text-sm text-white-600 mt-1">Gamer casual, gosto de animes e apaixonado por basquete.</p>
      </div>
    </div>

    <!-- BOTÃO CTA -->
    <router-link to="/sobre">
      <button class="mt-8 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
        Saiba mais sobre mim
      </button>
    </router-link>
  </div>
</template>
