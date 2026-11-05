<script setup lang="ts">
import SectionHeader from './components/SectionHeader.vue';

</script>

<template>
  <SectionHeader />
  <main>
    <!-- A marcação de router view ficara aqui porque o conteudo
    dos arquivos "views" ficarão exatamente nesse espaço, dentro do "main" -->
    <RouterView />
  </main>
</template>

