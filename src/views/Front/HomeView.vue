<template>
  <CarouselItem></CarouselItem>
  <div class="container mt-5">
    <div class="row g-0">
      <!-- eslint-disable max-len -->
      <div
        class="col-12 col-md-6 p-3 p-md-5 d-flex justify-content-center align-items-center flex-column text-center nature-1 bg-1"
      >
        <h3>累了嗎？<br />來杯茶，<br />放鬆你緊繃的神經吧！</h3>
      </div>
      <div class="col-12 col-md-6 bg-all right slidein">
        <img src="@/img/home.jpg" class="img-fluid" alt="tea" />
      </div>
    </div>
  </div>
  <ActivityCard></ActivityCard>
  <div class="container mt-3 mb-3">
    <h2 class="nature-1 Serif-TC fw-bolder">最新商品</h2>
    <div class="row">
      <div class="d-flex justify-content-center align-items-stretch flex-row flex-wrap">
        <div
          v-for="item in newestProducts"
          :key="item.id"
          class="card m-3 rounded-0"
          style="width: 18rem"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div class="position-relative">
            <img
              :src="item.imageUrl"
              style="height: 300px"
              class="card-img-top rounded-0 objfit"
              :alt="item.title"
            />
            <span
              class="border border-white position-absolute top-50 start-50 translate-middle px-2 py-1"
              ><h5 class="Serif-TC fs-3 fw-bolder text-white text-nowrap mb-0">
                {{ item.title }}
              </h5></span
            >
          </div>

          <div class="card-body">
            <RouterLink
              :to="`/products/${item.id}`"
              href="#"
              class="btn fs-5 brown-2 d-block mx-auto card-link"
              >前往選購</RouterLink
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@keyframes slide-in {
  from {
    opacity: 0.5;
    transform: translateX(-50%);
  }
  to {
    opacity: 1;
    transform: translateX(0%);
  }
}

.slidein {
  animation: slide-in 3000ms;
}
</style>

<script>
import CarouselItem from '@/components/CarouselItem.vue';
import ActivityCard from '@/components/ActivityCard.vue';

export default {
  name: 'HomeView',
  components: {
    CarouselItem,
    ActivityCard,
  },
  data() {
    return {
      products: [
        {
          id: '',
          imageUrl: '',
          title: '',
        },
      ],
      newestProducts: [],
    };
  },
  methods: {
    getProducts() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http.get(api).then((res) => {
        this.products = res.data.products;
        console.log(this.products);
        this.getNewest();
      });
    },
    getNewest() {
      this.newestProducts = this.products.slice(0, 3);
      console.log(this.newestProducts);
    },
  },
  created() {
    console.log(process.env.VUE_APP_API, process.env.VUE_APP_PATH);
    this.getProducts();
  },
};
</script>
