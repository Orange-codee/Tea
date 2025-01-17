<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-dark text-white">
          <h1 class="modal-title fs-5" id="exampleModalLabel">建立優惠券</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="title" class="form-label">優惠券名稱</label>
            <input
              v-model="tempCoupon.title"
              type="text"
              class="form-control"
              id="title"
              placeholder="請輸入優惠券名稱"
            />
          </div>
          <div class="mb-3">
            <label for="code" class="form-label">優惠券碼</label>
            <input
              v-model="tempCoupon.code"
              type="text"
              class="form-control"
              id="code"
              placeholder="請輸入優惠碼"
            />
          </div>
          <div class="mb-3">
            <label for="due_date" class="form-label">到期日</label>
            <input v-model="due_date" type="date" class="form-control" id="due_date" />
          </div>
          <div class="mb-3">
            <label for="price">折扣百分比</label>
            <input
              v-model.number="tempCoupon.percent"
              type="number"
              class="form-control"
              id="price"
              placeholder="請輸入折扣百分比"
            />
          </div>
          <div class="mb-3">
            <div class="form-check">
              <input
                v-model="tempCoupon.is_enabled"
                :true-value="1"
                :false-value="0"
                class="form-check-input"
                type="checkbox"
                id="is_enabled"
              />
              <label class="form-check-label" for="is_enabled">是否啟用</label>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
          <button @click="$emit('update-coupon', tempCoupon)" type="button" class="btn btn-primary">
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin';

export default {
  props: ['coupon'],
  watch: {
    coupon() {
      this.tempCoupon = this.coupon;
      console.log('tempCoupon.due_date', this.tempCoupon.due_date);
      // 收到Unix Timestamp 格式 轉為YYYY-MM-DD格式
      const dateAndTime = new Date(this.tempCoupon.due_date * 1000).toISOString().split('T');
      [this.due_date] = dateAndTime;
      console.log('due_date', this.due_date);
    },
    // 將使用者輸入的日期轉為Unix Timestamp 格式
    due_date() {
      this.tempCoupon.due_date = Math.floor(new Date(this.due_date).getTime() / 1000);
    },
  },
  data() {
    return {
      modal: '',
      tempCoupon: {},
      due_date: '',
    };
  },
  mixins: [modalMixin],
};
</script>
