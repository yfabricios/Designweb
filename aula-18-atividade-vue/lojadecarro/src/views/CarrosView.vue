<template>
  <div class="home-container">
    <article>
      <h2>Página dos Carros</h2>
    </article>

    <!-- A imagem do carro fica aqui dentro da div principal -->
    <div class="carro-card">
      <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70" alt="Carro Desportivo" class="carro-img" />
      <img src="https://images.unsplash.com/photo-1555215695-3004980ad54e" alt="Carro Desportivo Moderno" class="carro-img" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CarrosView'
}
</script>

<style scoped>
.home-container {
  text-align: center;
  padding: 20px;
}

.carro-img {
  width: 100%;
  max-width: 450px;
  height: auto;
  border-radius: 8px;
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 10px;
}
</style>