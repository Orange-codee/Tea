<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand Serif-TC fw-bolder nature-1 fs-3" href="#">Tea 後台管理</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
              to="/dashboard/products"
              active-class="active"
              class="nav-link Serif-TC fw-bolder nature-1 fs-5"
              aria-current="page"
              href="#"
              >產品</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/dashboard/orders"
              active-class="active"
              class="nav-link Serif-TC fw-bolder nature-1 fs-5"
              href="#"
              >訂單</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/dashboard/coupons"
              active-class="active"
              class="nav-link Serif-TC fw-bolder nature-1 fs-5"
              href="#"
              >優惠券</router-link
            >
          </li>
          <li class="nav-item">
            <a class="nav-link Serif-TC fw-bolder nature-1 fs-5" href="#" @click.prevent="logout"
              >登出</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    logout() {
      const api = `${process.env.VUE_APP_API}logout`;
      this.$http.post(api, this.user).then((res) => {
        if (res.data.success) {
          this.$router.push('/login');
        }
      });
    },
  },
};
</script>
