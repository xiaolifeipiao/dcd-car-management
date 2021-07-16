<template>
  <div id="form-box">
    <row class="form-row-item" type="flex" justify="start">
      <a-col :span="7" class="lala">
        <p>品牌名</p>
        <a-input class="input-item" v-model="brandName" placeholder="请输入品牌名称"></a-input>
      </a-col>
      <a-col :span="8" :offset="1" class="lala">
        <p>logo</p>
        <a-input class="input-item" placeholder="请输入" v-model:value="logoValue">
          <template #addonBefore>
            <a-select v-model:value="logoPre" style="width: 80px">
              <a-select-option value="Http://">Http://</a-select-option>
              <a-select-option value="Https://">Https://</a-select-option>
            </a-select>
          </template>
          <template #addonAfter>
            <a-select v-model:value="logoAfter" style="width: 80px">
              <a-select-option value=".com">.com</a-select-option>
              <a-select-option value=".jp">.jp</a-select-option>
              <a-select-option value=".cn">.cn</a-select-option>
              <a-select-option value=".org">.org</a-select-option>
            </a-select>
          </template>
        </a-input>
      </a-col>
      <a-col :span="7" :offset="1" class="lala">
        <p>车系</p>
        <a-select placeholder="请选择车系" v-model:value="carSeries" class="input-item">
          <a-select-option value="Home">A系</a-select-option>
          <a-select-option value="Company">B系</a-select-option>
        </a-select>
      </a-col>
    </row>
    <!-- row2 -->
    <row class="form-row-item" type="flex" justify="center">
      <a-col :span="7" class="lala">
        <p>产地</p>
        <a-input class="input-item" v-model="brandName" placeholder="请输入产地"></a-input>
      </a-col>
      <a-col :span="8" :offset="1" class="lala">
        <p>添加日期</p>
        <a-date-picker v-model:value="addDate" class="input-item" />
      </a-col>
      <a-col :span="7" :offset="1" class="lala">
        <p>车型</p>
        <a-select placeholder="请选择车型" v-model:value="carType" class="input-item">
          <a-select-option value="Home">大车</a-select-option>
          <a-select-option value="Company">小车</a-select-option>
        </a-select>
      </a-col>
    </row>
    <!-- button -->
    <div class="button-box">
      <a-button class="btn-item" @click="onCancel">取消</a-button>
      <a-button class="btn-item" type="primary" @click="onSubmit">提交</a-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref, reactive } from 'vue';
import {
  Row,
  Button as AButton,
  Col as ACol,
  Input as AInput,
  Select as ASelect,
  SelectOption as ASelectOption,
  InputGroup as AInputGroup,
  DatePicker as ADatePicker,
} from 'ant-design-vue';


export default defineComponent({
  components: {
    Row,
    ACol,
    AInput,
    AInputGroup,
    ASelect,
    ASelectOption,
    ADatePicker,
    AButton,
  },
  setup() {
    const loading = ref(true);
    const brandName: Ref<string> = ref<string>('');
    const logoPre = ref('Http://');
    const logoAfter = ref('.com');
    const logoValue = ref('');
    const carSeries = ref('');
    const addDate = ref('');
    const carType = ref('')



    const onSubmit = reactive(function(){
      const result = `
        brandName: ${brandName.value}-
        logo: ${logoPre.value + logoValue.value + logoAfter.value}-
        carSeries: ${carSeries.value}- 
        addDate : ${addDate.value}-
        carType: ${carType.value}
      `
      alert(result)
    })
    const onCancel = reactive(function(){
      brandName.value = "";
    })


    setTimeout(() => {
      loading.value = false;
    }, 1500);

    return {
      brandName,
      logoPre,
      logoAfter,
      logoValue,
      addDate,
      carSeries,
      carType,
      onSubmit,
      onCancel
    };
  },
});
</script>

<style lang="less">
#form-box {
  width: 100%;

  .input-item {
    // background-color: whitesmoke;
    border: 1px solid @management-box-border-color;
    width: 100%;
  }

  .form-row-item {
    &:last-of-type {
      margin-top: 1.5rem;
    }
  }

  .button-box {
    width: 100%;
    margin-top: 2rem;
    display: flex;
    justify-content: flex-end;

    .btn-item {
      margin-left: 1rem;
    }
  }
}
</style>