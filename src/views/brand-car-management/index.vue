<template>
  <div class="p-4">
    <h1>品牌车系管理页面</h1>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

// eslint-disable-next-line prettier/prettier
export default defineComponent({
  components: {},
  setup() {
    const loading = ref(true);
    setTimeout(() => {
      loading.value = false;
    }, 1500);
    return { loading };
  },
});
</script>
