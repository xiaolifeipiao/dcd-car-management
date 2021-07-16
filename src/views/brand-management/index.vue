<template>
  <div class="brand-mangement">
    <div class="title-box">
      <div class="title-wrapper">
        <h2>品牌管理</h2>
        <p>这是一个品牌管理页面</p>
      </div>
    </div>
    <div class="main-add">
      <p>添加品牌</p>
      <my-form />
    </div>
    <div class="bottom-maintain">
      <maintenance></maintenance>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import MyForm from './components/Form.vue';
import Maintenance from "./components/Maintenance.vue";

// eslint-disable-next-line prettier/prettier
export default defineComponent({
  components: {
    MyForm,
    Maintenance
  },
  setup() {
    const loading = ref(true);
    setTimeout(() => {
      loading.value = false;
    }, 1500);
    return { loading };
  },
});
</script>

<style lang="less" scoped>
@import './index.less';
</style>