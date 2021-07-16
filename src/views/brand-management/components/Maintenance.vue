<template>
  <div id="maintenance">
    <p>品牌维护</p>
    <a-divider />
    <!-- 表格 -->
    <div class="main-brand">
      <div class="row-item">
        <a-row>
          <a-col :span="6">名称</a-col>
          <a-col :span="6">logo</a-col>
          <a-col :span="6">车系</a-col>
          <a-col :span="6">操作</a-col>
        </a-row>
        <a-divider />
      </div>
      <div class="row-item" v-for="item in tableData" :key="item.id">
        <a-row>
          <a-col :span="6">{{ item.carName }}</a-col>
          <a-col :span="6">{{ item.logo }}</a-col>
          <a-col :span="6">{{ item.carSeries }}</a-col>
          <a-col :span="2">
            <a-space>
              <span class="row-item-btn" type="primary" size="small">编辑</span>
              <span class="row-item-btn" type="primary" size="small">删除</span>
            </a-space>
          </a-col>
        </a-row>
        <a-divider />
      </div>
    </div>
    <!-- 页码选择 -->
    <div class="bottom-page-select">
      <a-pagination class="page-selecter" v-model:current="current" :total="500" />
    </div>
  </div>
</template>
<script>
/**
 * @Description: 品牌维护组件
 * @Author: wawa
 * @Date: 2021-07-12 16:45:27
 */
import { defineComponent, ref, onMounted, reactive, toRefs } from 'vue';
import {
  Divider as ADivider,
  Pagination as APagination,
  Row as ARow,
  Col as ACol,
  Button as AButton,
} from 'ant-design-vue';

const mockData = async function () {
  const result = {
    code: 200,
    data: [
      {
        id: 'car0001',
        carName: '大众',
        logo: '0001',
        carSeries: 'a',
      },
      {
        id: 'car0002',
        carName: '奥迪',
        logo: '0002',
        carSeries: 'b',
      },
      {
        id: 'car0003',
        carName: '奔驰',
        logo: '0003',
        carSeries: 'c',
      },
    ],
  };
  return await result;
};

export default defineComponent({
  components: {
    ADivider,
    APagination,
    ARow,
    ACol,
    AButton,
  },
  setup() {
    const current = ref(1);
    const tableData = ref([]);

    onMounted(() => {
      // 获取数据
      mockData().then((data) => {
        if (data.code === 200) {
          tableData.value = data.data;
        }
      });
    });
    return {
      current,
      tableData,
    };
  },
});
</script>
<style lang="less">
.row-item-btn {
  cursor: pointer;
  color: blue;
  
  &:last-child{
    margin-left: 0.5rem;
  }
}
.bottom-page-select {
  width: 100%;

  .page-selecter {
    margin-left: 50%;
    transform: translateX(-50%);
  }
}
</style>