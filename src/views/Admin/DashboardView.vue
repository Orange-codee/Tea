<template>
  <Navbar></Navbar>
  <div class="container-fluid"><router-view /></div>
  <ToastMessage></ToastMessage>
</template>

<script>
import emitter from '@/methods/emitter';
import ToastMessage from '@/components/ToastMessage.vue';
import Navbar from '@/components/NavbarAdmin.vue';

export default {
  components: {
    Navbar,
    ToastMessage,
  },
  provide() {
    return {
      emitter,
    };
  },
  created() {
    // 得到名為hexToken的cookie
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    // console.log(token);
    // 把cookie(即token)加入Headers
    this.$http.defaults.headers.common.Authorization = token;
    const api = `${process.env.VUE_APP_API}api/user/check`;
    this.$http.post(api, this.user).then((res) => {
      // console.log(res);
      if (!res.data.success) {
        this.$router.push('/login');
      }
    });
  },
};
</script>
