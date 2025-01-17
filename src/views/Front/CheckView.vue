<template>
  <div class="container">
    <ProgressBar></ProgressBar>
    <div class="row my-5">
      <div class="col-md-6">
        <h3 class="my-3">訂單明細</h3>
        <div class="pe-3">
          <table class="table text-center">
            <tbody>
              <tr v-for="item in order.products" :key="item.product.id">
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
              <tr class="h5">
                <td colspan="4" class="text-end">
                  <strong>共計</strong>
                </td>
                <td class="text-end">
                  <strong>${{ $filters.currency(order.total) }}</strong>
                </td>
              </tr>
              <tr>
                <td colspan="4" class="text-end">訂單狀態</td>
                <td class="text-end">
                  <span class="text-success" v-if="is_paid">付款完成</span
                  ><span class="text-danger" v-else>尚未付款</span>
                </td>
              </tr>
            </tbody>
          </table>

          <div class="d-flex justify-content-end">
            <button :disabled="is_paid" @click="payOrder" class="btn btn-primary" type="button">
              進行付款
            </button>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <h3 class="my-3">訂單成立</h3>
        <p class="fs-4">感謝您訂購本公司茶品，收到訂單後，預計1~2天出貨，請您耐心等候。</p>
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
      order: {},
      orderId: '',
      is_paid: false,
    };
  },
  methods: {
    getOrder() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderId}`;
      this.$http.get(api).then((res) => {
        console.log('取得訂單', res);
        this.order = res.data.order;
        this.is_paid = res.data.order.is_paid;
      });
    },
    payOrder() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`;

      this.$http.post(api).then((res) => {
        console.log('付款', res);
        if (res.data.success) {
          this.getOrder();
        }
      });
    },
  },
  created() {
    this.orderId = this.$route.params.orderId;
    this.getOrder();
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
    &:last-child {
      &::before {
        border-color: #1a4d2e;
      }
      &::after {
        background-color: #1a4d2e;
      }
    }
  }
}
</style>
