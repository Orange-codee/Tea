<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item">
        <a
          @click.prevent="updatePage(pages.current_page - 1)"
          :class="{ disabled: !pages.has_pre }"
          class="page-link"
          href="#"
          aria-label="Previous"
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li v-for="page in pages.total_pages" :key="page" class="page-item">
        <a
          @click.prevent="updatePage(page)"
          :class="{ active: pages.current_page == page }"
          class="page-link"
          href="#"
          >{{ page }}</a
        >
      </li>
      <li class="page-item">
        <a
          @click.prevent="updatePage(pages.current_page + 1)"
          :class="{ disabled: !pages.has_next }"
          class="page-link"
          href="#"
          aria-label="Next"
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
// :pages="{ 頁碼資訊 }"
// @emitPages="更新頁面事件"
export default {
  props: ['pages'],
  methods: {
    updatePage(page) {
      this.$emit('emit-pages', page);
      console.log(typeof page);
    },
  },
};
</script>
