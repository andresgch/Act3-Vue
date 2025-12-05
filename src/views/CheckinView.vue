<template>
  <div class="checkin-page container checkin-container">

    <h2 class="mb-4">Check-Out</h2>

    <p v-if="reservas.length === 0">
      No hay reservas. Ve al coworking para elegir un espacio.
    </p>

    <div v-else class="row">

      <div class="col-lg-8">
        <div 
          v-for="(item, index) in reservas" 
          :key="index" 
          class="checkin-item d-flex align-items-center mb-4 p-4 shadow-sm rounded"
        >
          
          <img 
            :src="item.imageUrl" 
            alt="Imagen" 
            class="checkin-img me-3"
          />

          <div class="flex-grow-1">
            <h5 class="mb-1">{{ item.title }}</h5>
            <p class="mb-1 text-muted">{{ item.capacity }}</p>
            <p class="fw-bold mb-3">$ {{ Number(item.price).toFixed(2) }}</p>

            <div>
              <label class="form-label small fw-bold">Seleccionar fecha:</label>
              <input 
                type="date" 
                class="form-control form-control-sm date-input"
                v-model="item.fecha"
                @change="guardarFecha"
              />
              <p v-if="item.fecha" class="mt-2 text-success small">
                Fecha seleccionada: <strong>{{ item.fecha }}</strong>
              </p>
            </div>
          </div>

          <button 
            class="btn btn-outline-danger ms-3"
            @click="eliminarReserva(index)"
          >
            Eliminar
          </button>
        </div>
      </div>

      <div class="col-lg-4">
        <div class="checkin-summary shadow-sm p-4 rounded">
          <h5 class="mb-3">Resumen</h5>

          <p class="summary-total">
            Total: <strong>$ {{ total }}</strong>
          </p>

          <button 
            class="btn btn-success w-100 mt-3"
            @click="finalizarReserva"
          >
            Confirmar Reserva
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "CheckinView",

  data() {
    return {
      reservas: JSON.parse(localStorage.getItem("reservas")) || [],
    };
  },

  computed: {
    total() {
      return this.reservas
        .reduce((acc, item) => acc + Number(item.price), 0)
        .toFixed(2);
    },
  },

  methods: {
    eliminarReserva(index) {
      this.reservas.splice(index, 1);
      localStorage.setItem("reservas", JSON.stringify(this.reservas));
    },

    guardarFecha() {
      localStorage.setItem("reservas", JSON.stringify(this.reservas));
    },

    finalizarReserva() {
      alert("Reserva realizada con éxito");
      this.reservas = [];
      localStorage.removeItem("reservas");
    }
  }
};
</script>

<style scoped>
.checkin-container {
  max-width: 1600px !important;
}

.checkin-page {
  min-height: 70vh;
  padding: 50px 0;
}

.checkin-item {
  background: #fff;
  border-radius: 14px;
}

.checkin-img {
  width: 140px;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
}

.checkin-summary {
  background: #fff;
  border-radius: 14px;
}

.summary-total {
  font-size: 1.3rem;
}

.date-input {
  max-width: 170px;
}
</style>
