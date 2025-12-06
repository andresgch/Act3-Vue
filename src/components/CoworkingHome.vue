<template>
  <div class="container-fluid px-0">
    <div class="row d-flex justify-content-between coworking">
      <div class="col-12 col-lg-12 mr-5" id="news">
        <h3 class="mt-4 mt-lg-5 mb-0 mb-lg-5 green-color">
          <strong>Espacios de Coworking</strong>
        </h3>
        <div class="row d-flex justify-content-center mt-0 mt-lg-5">
          
          <!-- ESPACIO INDIVIDUAL -->
          <div class="col-6 col-lg-3 mt-5 mt-lg-0">
            <div class="card h-100 text-decoration-none">
              <div class="d-flex flex-column justify-content-center align-items-center">
                <img
                  :src="individualImg"
                  class="card-img img-fluid"
                  alt="Espacio individual"
                  width="60%"
                >
                <p class="badge text-bg-danger bagde-personal">Sin disponibilidad</p>
              </div>
              <div class="col-12 mt-1 mb-2">
                <div class="d-flex flex-row justify-content-between align-items-center px-3 calificacion">
                  <div>
                    <svg v-for="n in 5" :key="'ind-' + n"
                      xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffce00"
                      class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path
                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                      </path>
                    </svg>
                  </div>
                  <div>
                    <h6 class="review-count mb-0">30 opiniones</h6>
                  </div>
                </div>
              </div>
              <div class="card-body d-flex flex-column justify-content-center pt-0">
                <div class="text-center">
                  <h6 class="card-title"><strong>Espacio individual</strong></h6>
                </div>

                <div class="d-flex justify-content-center mb-2">
                  <small class="card-text opacity-75">1 persona</small>
                </div>

                <div class="d-flex justify-content-between precio">
                  <p class="card-text green-color"><strong>$1,00</strong></p>
                  <p class="card-text text-secondary opacity-50 text-decoration-line-through">
                    $3,30
                  </p>
                </div>
                <button
                  type="button"
                  class="btn btn-green px-0 px-lg-2"
                  @click="reservarIndividual"
                  :disabled="true"
                  :class="{ 'opacity-50': true }"
                >
                  <small>No disponible</small>
                </button>
              </div>
            </div>
          </div>

          <!-- TRABAJO EN EQUIPO -->
          <div class="col-6 col-lg-3 mt-5 mt-lg-0">
            <div class="card h-100 text-decoration-none">
              <div class="d-flex flex-column justify-content-center align-items-center">
                <img
                  :src="grupalImg"
                  class="card-img img-fluid"
                  alt="Trabajo en equipo"
                  width="60%"
                >
                <p class="badge text-bg-success bagde-personal">Disponible</p>
              </div>
              <div class="col-12 mt-1 mb-2">
                <div class="d-flex flex-row justify-content-between align-items-center px-3 calificacion">
                  <div>
                    <svg v-for="n in 5" :key="'eq-' + n"
                      xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffce00"
                      class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path
                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                      </path>
                    </svg>
                  </div>
                  <div>
                    <h6 class="review-count mb-0">15 opiniones</h6>
                  </div>
                </div>
              </div>
              <div class="card-body d-flex flex-column justify-content-center pt-0">
                <div class="text-center">
                  <h6 class="card-title"><strong>Trabajo en equipo</strong></h6>
                </div>

                <div class="d-flex justify-content-center mb-2">
                  <small class="card-text opacity-75">2 a 4 personas</small>
                </div>

                <div class="d-flex justify-content-between precio">
                  <p class="card-text green-color"><strong>$5,00</strong></p>
                  <p class="card-text text-secondary opacity-50 text-decoration-line-through">
                    $8,30
                  </p>
                </div>
                <button
                  type="button"
                  class="btn btn-green px-0 px-lg-2"
                  @click="reservarEquipo"
                >
                  <small>Reservar espacio</small>
                </button>
              </div>
            </div>
          </div>

          <!-- JUNTA DIRECTIVA -->
          <div class="col-6 col-lg-3 mt-5 mt-lg-0">
            <div class="card h-100 text-decoration-none">
              <div class="d-flex flex-column justify-content-center align-items-center">
                <img
                  :src="juntaImg"
                  class="card-img img-fluid"
                  alt="Junta directiva"
                  width="60%"
                >
                <p class="badge text-bg-success bagde-personal">Disponible</p>
              </div>
              <div class="col-12 mt-1 mb-2">
                <div class="d-flex flex-row justify-content-between align-items-center px-3 calificacion">
                  <div>
                    <!-- 4 estrellas + media -->
                    <svg v-for="n in 4" :key="'junta-full-' + n"
                      xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffce00"
                      class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path
                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                      </path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffce00"
                      class="bi bi-star-half" viewBox="0 0 16 16">
                      <path
                        d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z" />
                    </svg>
                  </div>
                  <div>
                    <h6 class="review-count mb-0">20 opiniones</h6>
                  </div>
                </div>
              </div>
              <div class="card-body d-flex flex-column justify-content-center pt-0">
                <div class="text-center">
                  <h6 class="card-title"><strong>Junta directiva</strong></h6>
                </div>

                <div class="d-flex justify-content-center mb-2">
                  <small class="card-text opacity-75">De 5 hasta 20 personas</small>
                </div>

                <div class="d-flex justify-content-between precio">
                  <p class="card-text green-color"><strong>$10,50</strong></p>
                  <p class="card-text text-secondary opacity-50 text-decoration-line-through">
                    $15,10
                  </p>
                </div>
                <button
                  type="button"
                  class="btn btn-green px-0 px-lg-2"
                  @click="reservarJunta"
                >
                  <small>Reservar espacio</small>
                </button>
              </div>
            </div>
          </div>

          <!-- AUDITORIO -->
          <div class="col-6 col-lg-3 mt-5 mt-lg-0">
            <div class="card h-100 text-decoration-none">
              <div class="d-flex flex-column justify-content-center align-items-center">
                <img
                  :src="auditorioImg"
                  class="card-img img-fluid"
                  alt="Auditorio"
                  width="60%"
                >
                <p class="badge text-bg-success bagde-personal">Disponible</p>
              </div>
              <div class="col-12 mt-1 mb-2">
                <div class="d-flex flex-row justify-content-between align-items-center px-3 calificacion">
                  <div>
                    <!-- 4 estrellas + media -->
                    <svg v-for="n in 4" :key="'aud-full-' + n"
                      xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffce00"
                      class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path
                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                      </path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffce00"
                      class="bi bi-star-half" viewBox="0 0 16 16">
                      <path
                        d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z" />
                    </svg>
                  </div>
                  <div>
                    <h6 class="review-count mb-0">28 opiniones</h6>
                  </div>
                </div>
              </div>
              <div class="card-body d-flex flex-column justify-content-center pt-0">
                <div class="text-center">
                  <h6 class="card-title"><strong>Auditorio</strong></h6>
                </div>
                <div class="d-flex justify-content-center mb-2">
                  <small class="card-text opacity-75">Más de 100 personas</small>
                </div>

                <div class="d-flex justify-content-between precio">
                  <p class="card-text green-color"><strong>$40,50</strong></p>
                  <p class="card-text text-secondary opacity-50 text-decoration-line-through">
                    $60,30
                  </p>
                </div>
                <button
                  type="button"
                  class="btn btn-green px-0 px-lg-2"
                  @click="reservarAuditorio"
                >
                  <small>Reservar espacio</small>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>         
</template>

<script>
import individualImg from '@/assets/imgs/individual.webp'
import grupalImg from '@/assets/imgs/grupal.webp'
import juntaImg from '@/assets/imgs/junta.webp'
import auditorioImg from '@/assets/imgs/auditorio.webp'

export default {
  name: 'CoworkingHome',
  data () {
    return {
      individualImg,
      grupalImg,
      juntaImg,
      auditorioImg
    }
  },
  methods: {
    reservar (space) {
      let reservas = JSON.parse(localStorage.getItem('reservas')) || []

      reservas.push({
        id: space.id,
        title: space.title,
        capacity: space.capacity,
        price: space.price,
        originalPrice: space.originalPrice,
        imageUrl: space.imageUrl,
        rating: space.rating,
        reviews: space.reviews,
        fecha: null
      })

      localStorage.setItem('reservas', JSON.stringify(reservas))
      alert('Ve al Check-Out para reservar')
    },

    reservarIndividual () {
      // Lo dejamos deshabilitado, pero por coherencia dejamos el método
      this.reservar({
        id: 1,
        title: 'Espacio individual',
        capacity: '1 persona',
        price: 1.0,
        originalPrice: 3.30,
        imageUrl: this.individualImg,
        rating: 5,
        reviews: 30
      })
    },

    reservarEquipo () {
      this.reservar({
        id: 2,
        title: 'Trabajo en equipo',
        capacity: '2 a 4 personas',
        price: 5.0,
        originalPrice: 8.30,
        imageUrl: this.grupalImg,
        rating: 5,
        reviews: 15
      })
    },

    reservarJunta () {
      this.reservar({
        id: 3,
        title: 'Junta directiva',
        capacity: 'De 5 hasta 20 personas',
        price: 10.50,
        originalPrice: 15.10,
        imageUrl: this.juntaImg,
        rating: 4.5,
        reviews: 20
      })
    },

    reservarAuditorio () {
      this.reservar({
        id: 4,
        title: 'Auditorio',
        capacity: 'Más de 100 personas',
        price: 40.50,
        originalPrice: 60.30,
        imageUrl: this.auditorioImg,
        rating: 4.5,
        reviews: 28
      })
    }
  }
}
</script>

<style scoped>
.coworking{
  padding: 0rem 6rem;
  margin: 0rem 0rem 5rem 0rem;
}

.card-img{
  box-shadow: 0px 5px 10px rgb(0 0 0 / 30%);
  width: 55% !important;
  margin-top: -20px;
}

.calificacion{
  padding: 1rem 0rem 0rem;
  margin: 0rem 1rem;
}

.precio{
  padding: 1rem 0rem 0rem;
  margin: 0rem 1rem;
}

.badge{
  margin-top: -2rem;
}

h3{
  font-size: 25px;
}
</style>
