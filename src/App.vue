<template>
  <div class="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
    <Navbar />
    <main class="flex-grow">
      <router-view />
    </main>
    <Footer />
  </div>
</template>


<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>
