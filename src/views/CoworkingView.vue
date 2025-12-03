<template>
  <div class="container-fluid px-0">
    <div class="row d-flex justify-content-between coworking">
      <div class="col-12 col-lg-12 mr-5" id="news">
        <h3 class="mt-4 mt-lg-5 mb-0 mb-lg-5 green-color">
          <strong>Espacios de Coworking</strong>
        </h3>
        
        <!-- FILTROS -->
        <div class="row mb-4">
          <div class="col-12">
            <div class="card filter-card p-3">
              <h6 class="green-color mb-3">
                <strong>Filtrar por capacidad:</strong>
              </h6>
              <div class="d-flex flex-wrap gap-2">
                <!-- Botones de filtro -->
                <button 
                  v-for="filter in capacityFilters" 
                  :key="filter.id"
                  @click="toggleFilter(filter.id)"
                  :class="[
                    'btn', 
                    'btn-sm',
                    activeFilters.includes(filter.id) ? 'btn-green' : 'btn-outline-secondary'
                  ]"
                >
                  {{ filter.label }}
                </button>
                
                <!-- Botón para limpiar filtros -->
                <button 
                  v-if="activeFilters.length > 0"
                  @click="clearFilters"
                  class="btn btn-sm btn-outline-danger"
                >
                  Limpiar filtros
                </button>
              </div>
              
              <!-- Filtros activos -->
              <div v-if="activeFilters.length > 0" class="mt-3">
                <small class="text-muted">
                  Mostrando espacios con capacidad: 
                  <span class="badge text-bg-success mx-1" v-for="filterId in activeFilters" :key="filterId">
                    {{ getFilterLabel(filterId) }}
                  </span>
                </small>
              </div>
            </div>
          </div>
        </div>

        <!-- ESPACIOS DE COWORKING -->
        <div class="row d-flex justify-content-center mt-0 mt-lg-3">
          <div 
            v-for="space in filteredSpaces" 
            :key="space.id"
            class="col-6 col-lg-3 mt-4 mt-lg-0"
          >
            <a :href="space.link" target="_blank" class="text-decoration-none">
              <div class="card h-100">
                <div class="d-flex flex-column justify-content-center align-items-center">
                  <img 
                    :src="space.imageUrl" 
                    class="card-img img-fluid" 
                    :alt="space.title"
                    width="60%"
                  >
                  <p 
                    :class="[
                      'badge', 
                      'bagde-personal',
                      space.available ? 'text-bg-success' : 'text-bg-danger'
                    ]"
                  >
                    {{ space.available ? 'Disponible' : 'Sin disponibilidad' }}
                  </p>
                </div>
                
                <!-- CALIFICACIÓN -->
                <div class="col-12 mt-1 mb-2">
                  <div class="d-flex flex-row justify-content-between align-items-center px-3 calificacion">
                    <div class="d-flex">
                      <svg 
                        v-for="n in 5" 
                        :key="n"
                        xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        fill="#ffce00"
                        :class="getStarClass(n, space.rating)"
                        viewBox="0 0 16 16"
                      >
                        <path :d="getStarPath(n, space.rating)" />
                      </svg>
                    </div>
                    <div>
                      <h6 class="review-count mb-0">{{ space.reviews }} opiniones</h6>
                    </div>
                  </div>
                </div>
                
                <!-- INFORMACIÓN DEL ESPACIO -->
                <div class="card-body d-flex flex-column justify-content-center pt-0">
                  <div class="text-center">
                    <h6 class="card-title"><strong>{{ space.title }}</strong></h6>
                  </div>

                  <div class="d-flex justify-content-center mb-2">
                    <small class="card-text opacity-75">{{ space.capacity }}</small>
                  </div>

                  <div class="d-flex justify-content-between precio">
                    <p class="card-text green-color"><strong>{{ formatPrice(space.price) }}</strong></p>
                    <p 
                      v-if="space.originalPrice"
                      class="card-text text-secondary opacity-50 text-decoration-line-through"
                    >
                      {{ formatPrice(space.originalPrice) }}
                    </p>
                  </div>
                  <button 
                    type="button" 
                    class="btn btn-green px-0 px-lg-2"
                    :disabled="!space.available"
                    :class="{ 'opacity-50': !space.available }"
                  >
                    <small>{{ space.available ? 'Reservar espacio' : 'No disponible' }}</small>
                  </button>
                </div>
              </div>
            </a>
          </div>
          
          <!-- Mensaje si no hay resultados -->
          <div v-if="filteredSpaces.length === 0" class="col-12 text-center mt-5">
            <div class="alert alert-info">
              <p class="mb-0">No se encontraron espacios que coincidan con los filtros seleccionados.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Importar las imágenes primero
import individualImg from '@/assets/imgs/individual.webp'
import grupalImg from '@/assets/imgs/grupal.webp'
import juntaImg from '@/assets/imgs/junta.webp'
import auditorioImg from '@/assets/imgs/auditorio.webp'

export default {
  name: 'CoworkingView',
  data() {
    return {
      activeFilters: [], // Filtros activos
      spaces: [
        {
          id: 1,
          title: 'Espacio individual',
          capacity: '1 persona',
          capacityFilter: 'individual',
          price: 1.00,
          originalPrice: 3.30,
          imageUrl: individualImg, // Usamos la importación directa
          available: false,
          rating: 5,
          reviews: 30,
          link: '#'
        },
        {
          id: 2,
          title: 'Trabajo en equipo',
          capacity: '2 a 4 personas',
          capacityFilter: 'pequeno-grupo',
          price: 5.00,
          originalPrice: 8.30,
          imageUrl: grupalImg,
          available: true,
          rating: 5,
          reviews: 15,
          link: '#'
        },
        {
          id: 3,
          title: 'Junta directiva',
          capacity: 'De 5 hasta 20 personas',
          capacityFilter: 'mediano-grupo',
          price: 10.50,
          originalPrice: 15.10,
          imageUrl: juntaImg,
          available: true,
          rating: 4.5,
          reviews: 20,
          link: '#'
        },
        {
          id: 4,
          title: 'Auditorio',
          capacity: 'Más de 100 personas',
          capacityFilter: 'grande-grupo',
          price: 40.50,
          originalPrice: 60.30,
          imageUrl: auditorioImg,
          available: true,
          rating: 4.5,
          reviews: 28,
          link: '#'
        }
      ],
      capacityFilters: [
        { id: 'individual', label: 'Individual (1 persona)' },
        { id: 'pequeno-grupo', label: 'Pequeño grupo (2-6 personas)' },
        { id: 'mediano-grupo', label: 'Mediano grupo (7-20 personas)' },
        { id: 'grande-grupo', label: 'Grande grupo (+20 personas)' }
      ]
    }
  },
  computed: {
    filteredSpaces() {
      if (this.activeFilters.length === 0) {
        return this.spaces
      }
      
      return this.spaces.filter(space => {
        return this.activeFilters.includes(space.capacityFilter)
      })
    }
  },
  methods: {
    formatPrice(price) {
      return `$${price.toFixed(2).replace('.', ',')}`
    },
    
    toggleFilter(filterId) {
      const index = this.activeFilters.indexOf(filterId)
      if (index === -1) {
        this.activeFilters.push(filterId)
      } else {
        this.activeFilters.splice(index, 1)
      }
    },
    
    clearFilters() {
      this.activeFilters = []
    },
    
    getFilterLabel(filterId) {
      const filter = this.capacityFilters.find(f => f.id === filterId)
      return filter ? filter.label : filterId
    },
    
    getStarClass(n, rating) {
      return n <= Math.floor(rating) ? 'bi bi-star-fill' : 'bi bi-star-half'
    },
    
    getStarPath(n, rating) {
      if (n <= Math.floor(rating)) {
        return 'M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z'
      } else if (n === Math.ceil(rating) && rating % 1 !== 0) {
        return 'M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z'
      } else {
        return 'M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z'
      }
    }
  }
}
</script>

<style scoped>
.coworking {
  padding: 0rem 6rem;
  margin: 0rem 0rem 5rem 0rem;
}

.card-img {
  box-shadow: 0px 5px 10px rgb(0 0 0 / 30%);
  width: 55% !important;
  margin-top: -20px;
}

.calificacion {
  padding: 1rem 0rem 0rem;
  margin: 0rem 1rem;
}

.precio {
  padding: 1rem 0rem 0rem;
  margin: 0rem 1rem;
}

.badge {
  margin-top: -2rem;
}

h3 {
  font-size: 25px;
}

.filter-card {
  background-color: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 8px;
}

.btn {
  margin-right: 5px;
  margin-bottom: 5px;
}

.opacity-50 {
  opacity: 0.5;
}

@media (max-width: 768px) {
  .coworking {
    padding: 0rem 2rem;
  }
  
  .filter-card {
    padding: 1rem !important;
  }
}
</style>