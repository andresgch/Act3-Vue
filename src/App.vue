<script setup>
    import Navbar from './components/Navbar.vue';
    import Menu from './components/Menu.vue';
    import Footer from './components/Footer.vue';
</script>



<template>
  <Navbar />
    <Menu />
    <main class="content-area"> 
      <router-view />
    </main>
    <Footer />
</template>



<style>
/*Header styles*/

body, html, #app {
    font-family: 'Inter', sans-serif; 
    height: 100%;
    margin: 0;
}

html, body {
  width: 100% !important;
  margin: 0;
  padding: 0;
  min-height: 100vh; 
  overflow-x: hidden;
}

#app{
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

.main-layout {
  width: 100%;
  min-height: 100vh;
}


.row {
    margin-left: 0 !important;
    margin-right: 0 !important;
}

.container-fluid {
    padding-left: 0 !important;
    padding-right: 0 !important;
}

.container, .container-fluid {
    padding-left: 15px !important;
    padding-right: 15px !important;
    max-width: 100% !important;
}

.btn-chart:hover{
    background-color: #164041 !important;
}

.header-library{
    background-color:#213635;
    border-bottom: 5px solid #1c5052;
}

* {
    box-sizing: border-box;
}

/* Estilos de los enlaces del menú principal */
.nav-item .green-color {
    color: #213635 !important;
    transition: color 0.2s ease-in-out;
}

.nav-item .green-color:hover {
    color: #164041 !important;
}

/* Estilos generales */
.b-green{
    background-color: #1c5052 !important; 
}

.b-dark-green{
    background-color: #213635;
}

.green-color{
    color: #1c5052;
}

.btn-green{
    background-color: #1c5052 !important;
    color:#fff !important;
    transition: all 300ms;
    border: none !important;
}

.primary-nav {
	position: fixed;
	z-index: 1;
}

.openNav{
    overflow: hidden;
}

ul.nav{
    overflow-x: scroll;
    width: calc(100% - 16px) !important;
}

button.hamburger.open-panel.nav-toggle.active {
    transition: transform .45s cubic-bezier(0.77, 0, 0.175, 1);
    overflow: hidden;
    z-index: 0;
}

.openNav .new-wrapper {
	position: absolute;
	transition: transform .45s cubic-bezier(0.77, 0, 0.175, 1);
	-webkit-transition: transform .45s cubic-bezier(0.77, 0, 0.175, 1);
	-moz-transition: transform .45s cubic-bezier(0.77, 0, 0.175, 1);
	-ms-transition: transform .45s cubic-bezier(0.77, 0, 0.175, 1);
	-o-transition: transform .45s cubic-bezier(0.77, 0, 0.175, 1);
}

.openNav .menu {
	right: 0;
	box-shadow: 3px 0px 10px 3px rgba(0, 0, 0, 0.7);
}

#footer{
  width: 100%; 
  background-color: #000;
  display: block;
  padding: 0px 6rem;
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
    ul.nav{
        overflow-x: hidden;
    }
}

html, body, #app, .main-layout {
    overflow-x: hidden !important;
    max-width: 100vw !important;
}

.row {
    margin-left: 0 !important;
    margin-right: 0 !important;
}

</style>
