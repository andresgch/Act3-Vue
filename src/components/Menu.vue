<template>
  <div class="bg-white border-bottom py-1">
    <div class="w-100">
      <div class="row d-flex justify-content-between">
        <div class="col-12">
          <ul class="nav flex-nowrap flex-lg-wrap justify-content-start justify-content-lg-center">
            <li class="nav-item">
              <router-link to="/" class="nav-link green-color">Inicio</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/coworking" class="nav-link green-color">Coworking</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link green-color">Librería</a>
            </li>
            <li class="nav-item">
              <a class="nav-link green-color">Contáctanos</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavbarComponent'
}
</script>

<style scoped>

</style>