<template>
  <nav class="navbar navbar-expand-lg header-library py-3">
    <div class="container-fluid px-4"> 
      <a class="navbar-brand m-0 p-0" href="">
        <img src="../assets/imgs/logo.svg" width="40%" alt="">
      </a>
      <button class="navbar-toggler btn-green" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon text-white"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <div class="input-group w-100 mt-lg-0 mt-3 mb-3 mb-lg-0">
          <input type="text" class="form-control border-0" placeholder="Buscar por título, autor o género..."
            aria-label="Recipient's username" aria-describedby="basic-addon2">
          <span class="input-group-text b-green border-0" id="basic-addon1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-search"
              viewBox="0 0 16 16">
              <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0">
              </path>
            </svg>
          </span>
        </div>
        <div class="chart ms-4 d-flex justify-content-end">
          <a href="" target="_blank">
            <button type="button" class="btn btn-green px-5">
              Login
            </button>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>



<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits(['carrito-toggle']);

const onCarritoClick = () => {
  emit('carrito-toggle');
};
</script>



<style scoped>
/*Coloqué los estilos de app.vue globales, eliminando la opción "scoped". Específicamente para el uso de los colores en TODOS los componentes*/
</style>