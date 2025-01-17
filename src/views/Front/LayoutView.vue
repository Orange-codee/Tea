<template>
  <NavbarUser></NavbarUser>
  <router-view :key="$route.fullPath"></router-view>
  <FooterItem></FooterItem>
</template>

<script>
import NavbarUser from '@/components/NavbarUser.vue';
import FooterItem from '@/components/FooterItem.vue';

export default {
  components: {
    NavbarUser,
    FooterItem,
  },
};
</script>
