<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<template>
    <header>
        <h1><RouterLink to="/home">Agência DEV CSA</RouterLink></h1>

        <nav>
            <ol>
                <li><RouterLink to="/projetos">Projetos</RouterLink></li>
                <li><RouterLink to="/alunos">Alunos</RouterLink></li>
                <li><RouterLink to="/noticias">Noticias</RouterLink></li>
                <li><RouterLink to="/contato">Contato</RouterLink></li>
            </ol>
        </nav>
        
    </header>
</template>