<template>
  <van-cell-group title="表单数据">
    <van-field v-model="value" label="文本" placeholder="请输入用户名" />
    <van-field
      v-model="fieldValue"
      is-link
      readonly
      label="城市"
      placeholder="选择城市"
      @click="showPicker = true"
    />
  </van-cell-group>
  <van-popup v-model:show="showPicker" round position="bottom">
    <van-picker :columns="columns" @cancel="showPicker = false" @confirm="onConfirm" />
  </van-popup>

  <van-cell-group title="组件跳转">
    <van-cell title="cp02" is-link to="cp02" />
  </van-cell-group>
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')
const columns = [
  { text: '杭州', value: 'Hangzhou' },
  { text: '宁波', value: 'Ningbo' },
  { text: '温州', value: 'Wenzhou' },
  { text: '绍兴', value: 'Shaoxing' },
  { text: '湖州', value: 'Huzhou' }
]
const fieldValue = ref('')
const showPicker = ref(false)

const onConfirm = ({ selectedOptions }) => {
  showPicker.value = false
  fieldValue.value = selectedOptions[0].text
}
</script>
