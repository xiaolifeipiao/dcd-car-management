<template>
  <!-- ConfigProvider 全局化配置,为组件提供统一的全局化配置。 -->
  <ConfigProvider :locale="getAntdLocale">
    <AppProvider>
      <RouterView />
    </AppProvider>
  </ConfigProvider>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { ConfigProvider } from 'ant-design-vue';
  import { AppProvider } from '/@/components/Application';
  import { useTitle } from '/@/hooks/web/useTitle';
  import { useLocale } from '/@/locales/useLocale';

  export default defineComponent({
    name: 'App',
    components: { ConfigProvider, AppProvider },
    setup() {
      useTitle();

      // support Multi-language
      const { getAntdLocale } = useLocale();

      return { getAntdLocale };
    },
  });
</script>
