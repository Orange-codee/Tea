<template>
  <!-- eslint-disable max-len -->
  <LoadingComponent :active="isLoading"></LoadingComponent>
  <div class="container">
    <div class="row mt-4 mb-4">
      <!-- list -->
      <div class="col-lg-3">
        <ul class="list-group writing-list-group bg-3 rounded-0">
          <li class="list-group-item bg-3 rounded-0">
            <a
              @click.prevent="selectedCategories('')"
              href="#"
              class="writing-list-group-item fs-5 Serif-TC fw-bolder nature-1 text-decoration-none"
              :class="{ 'a-active': selectedCategory === '' }"
              >全部</a
            >
          </li>
          <li
            v-for="(item, index) in categories"
            :key="'category' + index"
            class="list-group-item bg-3 rounded-0"
          >
            <a
              @click.prevent="selectedCategories(item)"
              :class="{ 'a-active': selectedCategory === item }"
              href="#"
              class="writing-list-group-item fs-5 Serif-TC fw-bolder nature-1 text-decoration-none"
              >{{ item }}</a
            >
          </li>
        </ul>
      </div>
      <!-- products -->
      <div class="col-lg-9">
        <section class="my-1">
          <h3 v-if="selectedCategory === ''" class="fs-4 Serif-TC fw-bolder nature-1">
            茶藝用品 / 全部
          </h3>
          <h3 v-else class="fs-4 Serif-TC fw-bolder nature-1">茶藝用品 / {{ selectedCategory }}</h3>
        </section>
        <div class="row">
          <div v-for="item in filterPageData" :key="item.id" class="col-lg-4 col-md-6 mb-3">
            <a @click.prevent="getProduct(item.id)" href="#" class="text-decoration-none"
              ><div class="card rounded-0 h-100 w-100">
                <div class="position-relative">
                  <img
                    :src="item.imageUrl"
                    class="card-img-top rounded-0 objfit"
                    style="height: 30vh"
                    :alt="item.title"
                  />
                  <span
                    class="border border-white position-absolute top-50 start-50 translate-middle px-2 py-1"
                    ><h2 class="Serif-TC fs-3 fw-bolder text-white text-nowrap mb-0">
                      {{ item.title }}
                    </h2></span
                  >
                </div>
                <div
                  class="card-body d-flex justify-content-between align-items-baseline pt-3 pb-2"
                >
                  <p class="fs-5">${{ item.price }}</p>
                  <button
                    @click.stop.prevent="addToCart(item)"
                    type="button"
                    class="btn fs-5 brown-2 p-0 card-link"
                  >
                    加入購物車
                  </button>
                </div>
              </div></a
            >
          </div>
        </div>
        <!-- 分頁 -->
        <nav aria-label="Page navigation example ">
          <ul class="pagination justify-content-center">
            <li class="page-item" :class="{ disabled: currentPage === 1 }">
              <a
                v-if="currentPage === 1"
                tabindex="-1"
                @click.prevent="switchPage(currentPage - 1)"
                class="page-link nature-1 writing-page-group-item rounded-0"
                href="#"
                aria-label="Previous"
              >
                <span aria-hidden="true">&laquo;</span>
              </a>
              <a
                v-else
                @click.prevent="switchPage(currentPage - 1)"
                class="page-link nature-1 writing-page-group-item rounded-0"
                href="#"
                aria-label="Previous"
              >
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li class="page-item d-flex rounded-0">
              <a
                @click.prevent="switchPage(page)"
                v-for="(page, index) in Math.ceil(filtercategories.length / limit)"
                :key="'page' + index"
                class="page-link nature-1 writing-page-group-item rounded-0"
                :class="{ 'bg-2': currentPage === page, 'text-white': currentPage === page }"
                href="#"
                >{{ page }}</a
              >
            </li>
            <li
              class="page-item rounded-0"
              :class="{ disabled: currentPage === Math.ceil(filtercategories.length / limit) }"
            >
              <a
                v-if="currentPage === Math.ceil(filtercategories.length / limit)"
                tabindex="-1"
                @click.prevent="switchPage(currentPage + 1)"
                class="page-link nature-1 writing-page-group-item rounded-0"
                href="#"
                aria-label="Next"
              >
                <span aria-hidden="true">&raquo;</span>
              </a>
              <a
                v-else
                @click.prevent="switchPage(currentPage + 1)"
                class="page-link nature-1 writing-page-group-item rounded-0"
                href="#"
                aria-label="Next"
              >
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pagination: {},
      products: [],
      categories: [],
      selectedCategory: '',
      isLoading: false,
      limit: 6,
      // 控制一頁幾個
      currentPage: 1,
    };
  },
  methods: {
    getProducts() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http.get(api).then((res) => {
        console.log('產品列表', res);
        this.pagination = res.data.pagination;
        this.products = res.data.products;
        this.getCategories();
      });
    },
    getCategories() {
      const categories = new Set();
      this.products.forEach((product) => {
        categories.add(product.category);
      });
      this.categories = [...categories];
    },
    selectedCategories(item) {
      this.selectedCategory = item;
      this.currentPage = 1;
    },
    switchPage(page = 1) {
      this.currentPage = page;
      console.log(this.currentPage);
    },
    addToCart(item) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      const cart = { product_id: item.id, qty: 1 };
      this.$http.post(api, { data: cart }).then((res) => {
        console.log('addToCart', res);
        this.emitter.emit('resetCart');
      });
    },
    getProduct(id) {
      this.$router.push(`/products/${id}`);
    },
  },
  computed: {
    filtercategories() {
      if (this.selectedCategory) {
        return this.products.filter((item) => item.category.match(this.selectedCategory));
      }
      return this.products;
    },
    filterPageData() {
      return this.filtercategories.slice(
        this.currentPage * this.limit - this.limit,
        this.currentPage * this.limit,
      );
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
