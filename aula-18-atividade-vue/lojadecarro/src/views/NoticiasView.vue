<template>
    <div class="noticias-container">
        <div v-for="item in noticias" :key="item.id" class="noticias-card">
            <h3 class="noticia-titulo">{{ item.titulo }}</h3>
            <p class="noticia-texto">{{ item.texto }}</p>
        </div>
    </div>
</template>
<script setup>

import { ref } from 'vue'


const noticias = ref([
  { 
    id: 1, 
    titulo: 'NOVO CARRO CHEGANDO!', 
    texto: 'A lojadecarros está trazendo uma lamborghini novinha em folha' 
  },
  { 
    id: 2, 
    titulo: 'OFERTAS EXCLUSIVAS DE FINANCIAMENTO', 
    texto: 'Aproveite taxas reduzidas e condições especiais de pagamento nesta semana em toda a nossa linha de seminovos.' 
  },
  { 
    id: 3, 
    titulo: 'TEST DRIVE DO NOVO SUV ELÉTRICO', 
    texto: 'Agende seu horário e venha experimentar de perto toda a tecnologia e performance dos novos modelos elétricos.' 
  },
  { 
    id: 4, 
    titulo: 'REVISÃO GRATUITA DE 10 ITENS', 
    texto: 'Traga seu veículo para uma inspeção preventiva completa sem custo e garanta total segurança para sua viagem.' 
  }
])

</script>