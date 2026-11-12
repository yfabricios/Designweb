<script setup>
import CardPadrao from '@/components/CardPadrao.vue'
import { ref, onMounted } from 'vue'

const localidades = ref([]) //variavel reativa

// async - porque essa função ela gera uma conexão externa e o valor demorar
async function buscarLocalicades(){
    try{
        // await - porque a conexão demora, logo é necessário esperar
        const resposta = await fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        const dados = await resposta.json()
        localidades.value = dados
    }catch(erro){
        console.error('Erro a conexão com a API.')
    }
}
//onMounted - metodo que chama a função quando a aplicação for "montada"
onMounted(buscarLocalicades)

</script>

<template>
    <h2>Sigla e estado</h2>
    <section>
        <CardPadrao v-for="item in localidades"
        :key="item.id"
        :titulo="item.nome"
        :subtitulo="item.sigla"
        />
    </section>
</template>

<style scoped>
    section{
        display: flex;
        flex-wrap: wrap;
    }
</style>