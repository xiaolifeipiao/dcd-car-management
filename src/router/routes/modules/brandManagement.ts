import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const brandManagementRoute: AppRouteModule = {
  path: '/brandManagement',
  name: 'brandManagement',
  redirect: '/brandManagement/brandManagement',
  component: LAYOUT,
  meta: {
    orderNo: 10,
    icon: 'ant-design:euro-outlined',
    title: t('品牌管理页'),
  },
  children: [
    {
      path: 'brandManagement',
      name: 'brandManagement',
      component: () => import('/@/views/brand-management/index.vue'),
      meta: {
        affix: false,
        title: t('品牌管理'),
      },
    },
  ],
};

export default brandManagementRoute;
