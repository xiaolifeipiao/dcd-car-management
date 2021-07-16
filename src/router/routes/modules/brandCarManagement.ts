import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const brandCarManagementRoute: AppRouteModule = {
  path: '/brandCarManagement',
  name: 'brandCarManagement',
  component: LAYOUT,
  meta: {
    orderNo: 10,
    icon: 'ant-design:edit-filled',
    title: t('品牌车系管理页'),
  },
  children: [
    {
      path: 'brandCarManagement',
      name: 'brandCarManagement',
      component: () => import('/@/views/brand-car-management/index.vue'),
      meta: {
        affix: false,
        title: t('品牌车系管理页'),
      },
    },
  ],
};

export default brandCarManagementRoute;
