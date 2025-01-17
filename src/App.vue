<template>
  <router-view />
</template>

<style lang="scss">
@import './assets/all';
</style>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  mounted() {
    AOS.init();
  },
};
</script>
