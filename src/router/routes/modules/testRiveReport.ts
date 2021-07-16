import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const testDiverReportRoute: AppRouteModule = {
  path: '/testDiverReport',
  name: 'testDiverReport',
  component: LAYOUT,
  meta: {
    orderNo: 10,
    icon: 'ant-design:pic-right-outlined',
    title: t('试驾报名管理页'),
  },
  children: [
    {
      path: 'testDiverReport',
      name: 'testDiverReport',
      component: () => import('/@/views/test-rive-report/index.vue'),
      meta: {
        affix: false,
        title: t('试驾报名管理页'),
      },
    },
  ],
};

export default testDiverReportRoute;
