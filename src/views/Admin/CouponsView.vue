<template>
  <div class="text-end">
    <button class="btn btn-primary" type="button" @click.prevent="openCouponModal(true)">
      建立新的優惠券
    </button>
  </div>
  <table class="table mt-4">
    <thead>
      <tr>
        <th>名稱</th>
        <th>優惠券碼</th>
        <th>折扣百分比</th>
        <th>到期日</th>
        <th>是否啟用</th>
        <th>編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in coupons" :key="item.id">
        <td>{{ item.title }}</td>
        <td>{{ item.code }}</td>
        <td>{{ `${item.percent}%` }}</td>
        <td>{{ $filters.date(item.due_date) }}</td>
        <td>
          <span v-if="item.is_enabled" class="text-success">啟用</span>
          <span v-else class="text-muted">未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button @click="openCouponModal(false, item)" class="btn btn-outline-primary btn-sm">
              編輯
            </button>
            <button @click="openDelModal(item)" class="btn btn-outline-danger btn-sm">刪除</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <CouponModal ref="couponModal" :coupon="tempCoupon" @update-coupon="updateCoupon"></CouponModal>
  <DelModal ref="couponDelModal" :item="tempCoupon" @del-product="delCoupon"></DelModal>
</template>

<script>
import CouponModal from '@/components/CouponModal.vue';
import DelModal from '@/components/DelModal.vue';

export default {
  components: {
    CouponModal,
    DelModal,
  },
  data() {
    return {
      coupons: [],
      tempCoupon: {
        title: '',
        is_enabled: 0,
        percent: 100,
        code: '',
      },
      isNew: false,
    };
  },
  methods: {
    getCoupons() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupons`;
      this.$http.get(api).then((res) => {
        // console.log(res.data.coupons);
        this.coupons = res.data.coupons;
      });
    },
    openCouponModal(isNew, item) {
      if (isNew) {
        this.tempCoupon = { due_date: Math.floor(new Date().getTime() / 1000) };
      } else {
        this.tempCoupon = { ...item };
      }
      this.isNew = isNew;
      this.$refs.couponModal.showModal();
    },
    updateCoupon(item) {
      if (this.isNew) {
        const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon`;
        this.$http.post(api, { data: this.tempCoupon }).then((res) => {
          console.log('新增', res);
          this.$httpMessageState(res, '新增優惠券');
          this.getCoupons();
          this.$refs.couponModal.hideModal();
        });
      } else {
        const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${item.id}`;
        this.$http.put(api, { data: this.tempCoupon }).then((res) => {
          console.log('修改', res);
          this.$httpMessageState(res, '修改優惠券');
          this.getCoupons();
          this.$refs.couponModal.hideModal();
        });
      }
    },
    openDelModal(item) {
      this.tempCoupon = { ...item };
      this.$refs.couponDelModal.showModal();
    },
    delCoupon(item) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${item.id}`;
      this.$http.delete(api).then((res) => {
        console.log('刪除', res);
        this.$httpMessageState(res, '刪除優惠券');
        this.getCoupons();
        this.$refs.couponDelModal.hideModal();
      });
    },
  },
  created() {
    this.getCoupons();
  },
};
</script>
