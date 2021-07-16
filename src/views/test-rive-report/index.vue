<template>
  <div class="p-4">
    <h2>试驾报告管理页</h2>
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
    }, 500);
    return { loading };
  },
});
</script>
