import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const carManagementRoute: AppRouteModule = {
  path: '/carManagement',
  name: 'carManagement',
  component: LAYOUT,
  meta: {
    orderNo: 10,
    icon: 'ant-design:group-outlined',
    title: t('车系管理页'),
  },
  children: [
    {
      path: 'carManagement',
      name: 'carManagement',
      component: () => import('/@/views/car-management/index.vue'),
      meta: {
        affix: false,
        title: t('车系管理'),
      },
    },
  ],
};

export default carManagementRoute;
