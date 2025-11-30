<template>
    <section id="featured" class="py-3 py-lg-5 bg-light-gray">
        <div class="container">
            <div class="row">
                <div class="d-flex flex-row justify-content-between align-items-center mb-3 mb-lg-5">
                    <h3 class="green-color"><strong>Explorar por categorías</strong></h3>
                </div>

                <div class="col-lg-2 col-4 mb-4" v-for="item in categorias":key="item.nombre"> 
                    <div class="d-flex flex-column justify-content-center text-center align-items-center card-category py-3 b-green rounded">
                        <img :src="getImageUrl(item.imagen)" class="img-fluid" :alt="`Icono de ${item.nombre}`" width="30%">
                        <h5 class="bold mt-3 text-white text-base md:text-lg">{{ item.nombre }}</h5>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
</template>


<script setup>
import { ref } from 'vue';

const categorias = ref([
    { nombre: 'Artes', imagen: '../src/assets/imgs/art.svg', enlace: '' },
    { nombre: 'Biografías', imagen: '../src/assets/imgs/biography.svg', enlace: '' },
    { nombre: 'Autoayuda', imagen: '../src/assets/imgs/selfhelp.svg', enlace: '' },
    { nombre: 'Ciencias', imagen: '../src/assets/imgs/science.svg', enlace: '' },
    { nombre: 'Ficción', imagen: '../src/assets/imgs/fiction.svg', enlace: '' },
    { nombre: 'Novelas', imagen: '../src/assets/imgs/novel.svg', enlace: '' },
]);

const getImageUrl = (imageName) => {
    return `img/${imageName}`; 
};
</script>


<style scoped>
.bg-light-gray{
    background-color: #F2F3F7 !important;
    padding: 40px;
}

h3{
    font-size: 28px;
}

h5{
    font-size: 18px;
}
</style>