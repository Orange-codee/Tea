<template>
  <!-- eslint-disable max-len -->
  <div class="container">
    <div class="row mx-5 my-4">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-white font-weight-bold fs-4">
          <li class="breadcrumb-item">
            <router-link class="text-dark Serif-TC fw-bolder custom-breadcrumb-item" to="/"
              >首頁</router-link
            >
          </li>
          <li class="breadcrumb-item">
            <router-link class="text-dark Serif-TC fw-bolder custom-breadcrumb-item" to="/products"
              >茶藝用品</router-link
            >
          </li>
          <li class="breadcrumb-item active text-primary Serif-TC fw-bolder" aria-current="page">
            {{ product.title }}
          </li>
        </ol>
      </nav>
      <div class="col-md-6">
        <img :src="product.imageUrl" class="img-fluid" :alt="product.title" />
      </div>
      <div class="col-md-6">
        <h2 class="Serif-TC fw-bolder nature-1 my-2">{{ product.title }}</h2>

        <p class="my-3">{{ product.description }}</p>

        <h3 class="fs-3 mb-3 text-end" style="margin-top: 100px">
          售價 ${{ $filters.currency(product.price) }}
        </h3>
        <div class="d-flex">
          <div class="col m-1">
            <label for="unit" style="display: none"></label>
            <select id="unit" name="unit" class="form-select mr-3" v-model="num">
              <option :value="num" v-for="num in 10" :key="num">
                {{ num }} {{ product.unit }}
              </option>
            </select>
          </div>

          <div class="d-grid col m-1">
            <button @click="addToCart" type="button" class="btn btn-primary">加到購物車</button>
          </div>
        </div>
      </div>
      <!-- navtabs -->
      <div class="col my-4">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home"
              type="button"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              商品介紹
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              常見問題
            </button>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div
            class="tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <div class="row">
              <div class="col-12 my-3">
                <h4 class="text-primary font-weight-bold">產品詳細介紹</h4>
              </div>
              <div class="col-12">
                <p>{{ product.content }}</p>
                <div v-if="product.category === '茶葉'">
                  <p>產品特色及規格</p>
                  <ul>
                    <li>100%台灣茶</li>
                    <li>三角立體茶包</li>
                    <li>商品規格：2.5gX36入/包</li>
                    <li>保存期限：6個月，製造日期如包裝標示</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
            <div class="row">
              <div class="col-12 my-3">
                <h4 class="text-primary font-weight-bold">產品常見問題</h4>
              </div>
              <div class="col-md-5">
                <p class="text-primary mb-4">沖泡包和茶包可以存放多久？</p>
              </div>
              <div class="col-md-7">
                <p class="text-justify">
                  所有產品皆無添加防腐劑，保存期限為12個月，茶包最佳賞味期限為6個月，提醒您在最佳賞味期限內品茗！
                </p>
              </div>

              <div class="col-md-5">
                <p class="text-primary mb-4">茶包保存方式？</p>
              </div>
              <div class="col-md-7">
                <p class="text-justify">
                  本茶包選用茶葉無添加防腐劑。請密封放置乾涼處，避免高溫潮溼，以免茶包變質。
                </p>
              </div>

              <div class="col-md-5">
                <p class="text-primary mb-4">茶包內的茶葉有農藥嗎？</p>
              </div>
              <div class="col-md-7">
                <p class="text-justify">
                  堅持不殘留農藥的標準，本茶包選用茶葉通過TTB專業認證400項農藥檢測，絕無殘留，請您放心。
                </p>
              </div>

              <div class="col-md-5">
                <p class="text-primary mb-4">下單後多久會收到？</p>
              </div>
              <div class="col-md-7">
                <p class="text-justify">
                  為了能讓顧客品嘗到最新鮮的滋味，所有茶品下單後，約1~2天內可以送達，若訂單數量超過
                  10 包以上，我們會另外聯繫您告知預計送達時間。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- related -->
      <template v-if="relatedProducts.length">
        <h3 class="font-weight-bold">相關商品</h3>
        <div v-for="item in relatedProducts" :key="item.id" class="col-lg-4 col-md-6 mb-3">
          <router-link :to="`/products/${item.id}`" href="#" class="text-decoration-none"
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
            </div></router-link
          >
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: '',
      product: {
        category: '',
        content: '',
        description: '',
        imageUrl: '',
        origin_price: 0,
        price: 0,
        title: '',
        unit: '',
      },
      num: 1,
      products: [],
    };
  },
  methods: {
    getProduct() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`;
      this.$http.get(api).then((res) => {
        this.product = res.data.product;
        console.log('單一產品細節', this.product);
      });
    },
    addToCart() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      const cart = { product_id: this.id, qty: this.num };
      this.$http.post(api, { data: cart }).then((res) => {
        console.log('addToCart', res);
        this.emitter.emit('resetCart');
      });
    },
    getProducts() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http.get(api).then((res) => {
        console.log('產品列表', res);
        this.products = res.data.products;
      });
    },
  },
  computed: {
    relatedProducts() {
      return this.products.filter(
        (item) => item.category === this.product.category && item.id !== this.product.id,
      );
    },
  },
  created() {
    this.id = this.$route.params.productId;
    this.getProduct();
    this.getProducts();
  },
};
</script>
