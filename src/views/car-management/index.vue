<template>
  <div id="car-management">
    <h2>车辆管理页</h2>
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
