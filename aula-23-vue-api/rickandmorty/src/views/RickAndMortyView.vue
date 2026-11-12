<script setup>
import CardPadrao from '@/components/CardPadrao.vue'
import { ref, onMounted } from 'vue'

const personagens = ref([]) //variavel reativa

// async - porque essa função ela gera uma conexão externa e o valor demorar
async function buscarPersonagens(){
    try{
        // await - porque a conexão demora, logo é necessário esperar
        const resposta = await fetch("https://rickandmortyapi.com/api/character")
        const dados = await resposta.json()
        personagens.value = dados.results
    }catch(erro){
        console.error('Erro a conexão com a API.')
    }
}
//onMounted - metodo que chama a função quando a aplicação for "montada"
onMounted(buscarPersonagens)

</script>

<template>
    <h2>Rick and Morty</h2>
    <section>
        <CardPadrao v-for="item in personagens"
        :key="item.id"
        :titulo="item.name"
        :subtitulo="item.species"
        :imagem="item.image"
        />
    </section>
</template>

<style scoped>
    section{
        display: flex;
        flex-wrap: wrap;
    }
</style>