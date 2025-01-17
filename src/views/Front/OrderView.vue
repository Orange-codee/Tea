<template>
  <div class="container">
    <ProgressBar></ProgressBar>
    <div class="row my-5">
      <router-link to="/cart" class="h5 back-to-cart"
        ><i class="bi bi-caret-left-fill mr-2"></i>返回購物車清單
      </router-link>
      <div class="col-md-6">
        <h3 class="my-3">訂單明細</h3>
        <div class="px-3">
          <table class="table text-center">
            <tbody>
              <tr v-for="item in cart.carts" :key="item.id">
                <td class="align-middle text-center" width="30"></td>
                <td class="align-middle" width="100">
                  <img :src="item.product.imageUrl" width="100%" :alt="item.product.title" />
                </td>
                <td class="align-middle">{{ item.product.title }}</td>
                <td class="align-middle" width="100">{{ item.qty }} {{ item.product.unit }}</td>
                <td class="align-middle text-end">${{ $filters.currency(item.final_total) }}</td>
              </tr>
            </tbody>
          </table>
          <table class="table mt-3">
            <tbody>
              <tr v-if="cart.final_total !== cart.total">
                <td colspan="5" class="text-end text-primary">已套用優惠券</td>
              </tr>
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
      </div>
      <div class="col-md-6">
        <h3 class="my-3">顧客資訊</h3>
        <v-form v-slot="{ errors }" @submit="createOrder">
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <v-field
              v-model="form.user.email"
              :class="{ 'is-invalid': errors['email'] }"
              rules="required"
              name="email"
              type="email"
              class="form-control"
              id="email"
              placeholder="請輸入Email"
            ></v-field>
            <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="mb-3">
            <label for="name" class="form-label">收件人姓名</label>
            <v-field
              v-model="form.user.name"
              :class="{ 'is-invalid': errors['姓名'] }"
              rules="required"
              name="姓名"
              type="text"
              class="form-control"
              id="name"
              placeholder="請輸入姓名"
            ></v-field>
            <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="mb-3">
            <label for="tel" class="form-label">收件人電話</label>
            <v-field
              v-model="form.user.tel"
              :class="{ 'is-invalid': errors['電話'] }"
              rules="required"
              name="電話"
              type="tel"
              class="form-control"
              id="tel"
              placeholder="請輸入電話"
            ></v-field>
            <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="mb-3">
            <label for="address" class="form-label">收件人地址</label>
            <v-field
              v-model="form.user.address"
              :class="{ 'is-invalid': errors['地址'] }"
              rules="required"
              name="地址"
              type="text"
              class="form-control"
              id="address"
              placeholder="請輸入地址"
            ></v-field>
            <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">備註</label>
            <textarea
              v-model="form.message"
              type="text"
              class="form-control"
              id="message"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div class="text-end">
            <button class="btn btn-primary">送出訂單</button>
          </div>
        </v-form>
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
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
      cart: {
        carts: [],
        total: 0,
        final_total: 0,
      },
    };
  },
  methods: {
    createOrder() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`;
      this.$http.post(api, { data: this.form }).then((res) => {
        console.log('建立訂單', res);
        if (res.data.success) {
          this.form = {
            user: {
              name: '',
              email: '',
              tel: '',
              address: '',
            },
            message: '',
          };
          this.emitter.emit('resetCart');
          this.$router.push(`/checkout/${res.data.orderId}`);
        }
      });
    },
    getCart() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(api).then((res) => {
        this.cart = res.data.data;
        console.log('取得購物車', this.cart);
      });
    },
  },
  created() {
    this.getCart();
  },
};
</script>

<style lang="scss">
.progressbar {
  li {
    &:nth-child(2) {
      &::before {
        border-color: #1a4d2e;
      }
    }
  }
}
</style>
