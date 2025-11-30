<template>
    <section>
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="../assets/imgs/banner1.jpg" class="d-block w-100" alt="...">
                    </div>
                </div>
            </div>
        </section>
</template>

<style scoped>
body {
  padding-top: 3rem;
  padding-bottom: 3rem;
  color: rgb(var(--bs-tertiary-color-rgb));
}

.carousel {
  margin-bottom: 4rem;
}

.carousel-caption {
  bottom: 3rem;
  z-index: 10;
}

.carousel-item {
  height: 15rem;
}

.marketing .col-lg-4 {
  margin-bottom: 1.5rem;
  text-align: center;
}

.marketing .col-lg-4 p {
  margin-right: .75rem;
  margin-left: .75rem;
}

.featurette-divider {
  margin: 5rem 0; 
}

.featurette-heading {
  letter-spacing: -.05rem;
}

/* RESPONSIVE CSS
-------------------------------------------------- */

@media (min-width: 40em) {
  /* Bump up size of carousel content */
  .carousel-caption p {
    margin-bottom: 1.25rem;
    font-size: 1.25rem;
    line-height: 1.4;
  }

  .featurette-heading {
    font-size: 50px;
  }
}

@media (min-width: 62em) {
  .featurette-heading {
    margin-top: 7rem;
  }
}
</style>