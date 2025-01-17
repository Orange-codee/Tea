<template>
  <table class="table mt-4">
    <thead>
      <tr>
        <th>購買時間</th>
        <th>Email</th>
        <th>訂單內容</th>
        <th>訂單備註</th>
        <th>應付金額</th>
        <th>是否付款</th>
        <th>編輯</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="item in orders" :key="item.id">
        <tr v-if="orders.length" :class="{ 'text-secondary': !item.is_paid }">
          <td>{{ $filters.date(item.create_at) }}</td>
          <td>{{ item.user.email }}</td>
          <td>
            <ul class="list-unstyled">
              <li v-for="(product, i) in item.products" :key="i">
                {{ product.product.title
                }}<span> 數量：{{ product.qty }}{{ product.product.unit }}</span>
              </li>
            </ul>
          </td>
          <td>{{ item.message }}</td>
          <td>{{ $filters.currency(item.total) }}</td>
          <td>
            <div class="form-check form-switch">
              <input
                v-model="item.is_paid"
                @change="updatePaid(item)"
                class="form-check-input"
                type="checkbox"
                :id="`paidSwitch${item.id}`"
              />
              <label class="form-check-label" :for="`paidSwitch${item.id}`"
                ><span v-if="item.is_paid" class="text-success">已付款</span
                ><span v-else>未付款</span></label
              >
            </div>
          </td>
          <td>
            <div class="btn-group">
              <button @click="openModal(item)" class="btn btn-outline-primary btn-sm">檢視</button>
              <button @click="openDelModal(item)" class="btn btn-outline-danger btn-sm">
                刪除
              </button>
            </div>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
  <Pagination :pages="pagination" @emit-pages="getOrders"></Pagination>
  <OrderModal ref="orderModal" :order="tempOrder" @update-order="updatePaid"></OrderModal>
  <DelModal ref="delModal" :item="tempOrder" @del-product="delOrder"></DelModal>
</template>

<style>
tr.text-secondary td,
tr.text-secondary th {
  color: inherit;
}
</style>

<script>
import Pagination from '@/components/PaginationItem.vue';
import OrderModal from '@/components/OrderModal.vue';
import DelModal from '@/components/DelModal.vue';

export default {
  components: {
    Pagination,
    OrderModal,
    DelModal,
  },
  data() {
    return {
      orders: [],
      pagination: {},
      tempOrder: {},
    };
  },
  methods: {
    getOrders(page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`;
      this.$http.get(api).then((res) => {
        console.log('取得訂單列表', res);
        if (res.data.success) {
          this.orders = res.data.orders;
          this.pagination = res.data.pagination;
        }
      });
    },
    openModal(item) {
      this.tempOrder = { ...item };
      this.$refs.orderModal.showModal();
    },
    updatePaid(item) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${item.id}`;
      const paid = { is_paid: item.is_paid };
      console.log('paid', paid);
      this.$http.put(api, { data: paid }).then((res) => {
        console.log('更新付款狀態', res);
        this.$httpMessageState(res, '更新付款狀態');
        const currentPage = this.pagination.current_page;
        this.getOrders(currentPage);
      });
      this.$refs.orderModal.hideModal();
    },
    openDelModal(item) {
      this.tempOrder = { ...item };
      this.$refs.delModal.showModal();
    },
    delOrder(item) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${item.id}`;
      this.$http.delete(api).then((res) => {
        console.log('刪除訂單', res);
        this.$httpMessageState(res, '刪除訂單');
        const currentPage = this.pagination.current_page;
        this.getOrders(currentPage);
      });
      this.$refs.delModal.hideModal();
    },
  },
  created() {
    this.getOrders();
  },
};
</script>
