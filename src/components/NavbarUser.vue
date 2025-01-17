<template>
  <!-- eslint-disable max-len -->
  <nav class="navbar navbar-expand-lg bg-3">
    <div class="container-fluid bg-3 align-items-baseline">
      <a class="navbar-brand navbar-text Serif-TC fw-bolder nature-1 fs-3" href="#">Tea</a>

      <button
        ref="navbarBtn"
        class="navbar-toggler order-first"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- 右側購物車按鈕 -->
      <div class="order-lg-last order-0">
        <a
          @click.prevent=""
          active-class="active"
          data-bs-toggle="dropdown"
          class="navbar-brand Serif-TC fw-bolder nature-1 fs-5 position-relative"
          href="#"
          ><i class="bi bi-cart-fill cart-item" style="font-size: 1.5rem; font-style: normal">
            <span
              v-if="carts.length"
              style="font-size: 0.7rem"
              class="badge rounded-pill position-absolute translate-middle bg-danger text-light"
              >{{ carts.length }}
            </span></i
          ></a
        >
        <!-- dropdown -->
        <div class="dropdown-menu start-100 dropdown-menu-custom rounded-0 border-1">
          <div class="p-2" v-if="carts.length">
            <h6 class="text-center">已選擇商品</h6>
            <table class="table text-center table-sm">
              <tbody>
                <tr v-for="item in carts" :key="item.id">
                  <td class="align-middle" width="30">
                    <a @click.prevent="removeCartItem(item.id)" href="#" class="text-secondary">
                      <i class="bi bi-trash3"><span style="font-size: 0rem">刪除</span></i>
                    </a>
                  </td>
                  <td class="align-middle">{{ item.product.title }}</td>
                  <td class="align-middle" width="80">{{ item.qty }} {{ item.product.unit }}</td>
                  <td class="align-middle text-right">
                    ${{ $filters.currency(item.final_total) }}
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="text-center">
              <router-link to="/cart" class="btn text-white btn-primary">
                <i class="bi bi-cart-plus-fill"></i>
                結帳去
              </router-link>
            </div>
          </div>
          <div class="p-2" v-else>
            <h6 class="text-center mb-3">購物車沒有商品喔！</h6>
            <div class="text-center">
              <router-link to="/products" class="btn text-white bg-2 cart-a">
                <i class="bi bi-bag"></i> 選購去
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
              to="/info"
              active-class="active"
              class="nav-link Serif-TC fw-bolder nature-1 fs-5"
              aria-current="page"
              href="#"
              >茶資訊</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/products"
              active-class="active"
              class="nav-link Serif-TC fw-bolder nature-1 fs-5"
              href="#"
              >找茶</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      carts: [],
    };
  },
  watch: {
    $route() {
      if (document.body.offsetWidth < 992) {
        this.$refs.navbarBtn.click();
      }
    },
  },
  methods: {
    getCart() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(api).then((res) => {
        this.carts = res.data.data.carts;
        console.log('取得購物車N', this.carts, this.carts.length);
      });
    },
    removeCartItem(id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.$http.delete(api).then((res) => {
        console.log('刪除N', res);
        this.emitter.emit('resetCartFromNav');
        this.getCart();
      });
    },
  },
  created() {
    this.getCart();
    this.emitter.on('resetCart', this.getCart);
  },
};
</script>
