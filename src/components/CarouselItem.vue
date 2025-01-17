<template>
  <div ref="carousel" id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="@/img/carousel1.jpg" class="d-block w-100" alt="東方文化" />
        <div class="carousel-caption d-none d-md-block">
          <h5 class="h1 Serif-TC fw-bolder">東方文化</h5>
          <p class="h4">如蘭在舌，沁人心脾，芬芳甘冽，清香怡人。</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="@/img/carousel2.jpg" class="d-block w-100" alt="靜心品茗" />
        <div class="carousel-caption d-none d-md-block">
          <h5 class="h1 Serif-TC fw-bolder">靜心品茗</h5>
          <p class="h4">碧波蕩漾一抹香，茶不醉人人自醉。</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="@/img/carousel3.jpg" class="d-block w-100" alt="放鬆身心" />
        <div class="carousel-caption d-none d-md-block">
          <h5 class="h1 Serif-TC fw-bolder">放鬆身心</h5>
          <p class="h4">
            味濃香永。醉鄉路，成佳境。恰如燈下故人，萬里歸來對影。口不能言，心下快活自省。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/*  客製化輪播字幕位置 */
.carousel-caption {
  top: 50%;
  transform: translate(0, -50%);
  bottom: auto;
  text-align: start;
}
</style>

<script>
import Carousel from 'bootstrap/js/dist/carousel';

export default {
  data() {
    return {
      carousel: {},
    };
  },
  mounted() {
    this.carousel = new Carousel(this.$refs.carousel);
  },
};
</script>
