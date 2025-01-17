<template>
  <div class="container">
    <ProgressBar></ProgressBar>
    <div class="row">
      <div class="col-md-8 mb-4 mx-auto">
        <h5 class="text-center py-3 bg-5 text-white rounded mt-4">
          <i class="bi bi-cart-fill" style="font-size: 1.5rem"></i>
          購物車
        </h5>
        <div class="text-center mt-5" v-if="!cart.carts.length">
          <p class="h3 mb-5">購物車還是空的喔！</p>
          <p class="h5 text-secondary">
            再忙，也別忘了犒賞自己唷！ <i class="far fa-smile-wink"></i>
          </p>
          <div class="mt-5">
            <router-link to="/products" class="btn btn-primary btn-lg">來去逛逛</router-link>
          </div>
        </div>
        <div v-else>
          <table class="table text-center">
            <tbody>
              <tr v-for="item in cart.carts" :key="item.id">
                <td class="align-middle text-center" width="30">
                  <a @click.prevent="removeCartItem(item.id)" href="#" class="text-secondary">
                    <i class="bi bi-trash3"><span style="font-size: 0rem">刪除</span></i>
                  </a>
                </td>
                <td class="align-middle" width="100">
                  <img :src="item.product.imageUrl" width="100%" :alt="item.product.title" />
                </td>
                <td class="align-middle">{{ item.product.title }}</td>
                <td class="align-middle" width="100">
                  <div class="input-group input-group-sm">
                    <label for="unit"></label
                    ><input
                      @change="updateCart(item.id, item.qty)"
                      v-model.number="item.qty"
                      min="1"
                      id="unit"
                      type="number"
                      class="form-control"
                    />
                    <div class="input-group-text rounded-0">/ {{ item.product.unit }}</div>
                  </div>
                </td>
                <td class="align-middle text-end">${{ $filters.currency(item.final_total) }}</td>
              </tr>
            </tbody>
          </table>
          <div class="input-group mb-3 input-group-sm">
            <label for="coupon"></label
            ><input
              v-model="coupon"
              id="coupon"
              type="text"
              class="form-control"
              placeholder="請輸入優惠碼"
            />
            <div class="input-group-append">
              <button @click.prevent="addCoupon" class="btn btn-outline-secondary" type="button">
                套用優惠碼
              </button>
            </div>
          </div>
          <div>
            <table class="table mt-4">
              <tbody>
                <tr class="h5">
                  <td colspan="4" class="text-end">
                    <strong>共計</strong>
                  </td>
                  <td class="text-end">
                    <strong>${{ $filters.currency(cart.final_total) }}</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="form-row d-flex">
            <div class="d-grid col m-1">
              <router-link to="/products" class="btn btn-outline-secondary">
                <i class="bi bi-caret-left-fill mr-2"></i>
                繼續購物
              </router-link>
            </div>
            <div class="d-grid col m-1">
              <router-link to="/order" class="btn btn-primary text-white">
                繼續付款
                <i class="bi bi-caret-right-fill ml-2"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressBar from '@/components/ProgressBar.vue';

export default {
  components: {
    ProgressBar,
  },
  data() {
    return {
      cart: {
        carts: [],
        total: 0,
        final_total: 0,
      },
      coupon: '',
    };
  },
  methods: {
    getCart() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(api).then((res) => {
        this.cart = res.data.data;
        console.log('取得購物車', this.cart);
      });
    },
    removeCartItem(id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.$http.delete(api).then((res) => {
        console.log('刪除', res);
        this.getCart();
        this.emitter.emit('resetCart');
      });
    },
    updateCart(id, count = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`;
      const newCart = { product_id: id, qty: count };
      this.$http.put(api, { data: newCart }).then((res) => {
        console.log('更新購物車', res);
        this.emitter.emit('resetCart');
        this.getCart();
      });
    },
    addCoupon() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`;
      this.$http.post(api, { data: { code: this.coupon } }).then((res) => {
        console.log('添加優惠券', res);
        this.emitter.emit('resetCart');
        this.getCart();
      });
    },
  },
  created() {
    this.getCart();
    this.emitter.on('resetCartFromNav', this.getCart);
  },
};
</script>
