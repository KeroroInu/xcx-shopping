<template>
  <button @click="addCount">{{ count.count }}</button>
  <button @click="addAge">{{ count.age }}</button>
</template>

<script setup>
// vue3 代码
import { ref, watch } from 'vue'
const count = ref({count:0,age:18}) // ref() 用于定义响应式数据（类似于 vue2 中的 data() { return { count: 0 } }）
const addCount = () => count.value.count++
const addAge = () => count.value.age++
watch(
  [() => count.value.count, () => count.value.age],
  (newVal, oldVal) => {
    console.log('newVal', newVal)
    console.log('oldVal', oldVal)
  },
)
// vue2 代码
// export default {
//   data() {
//     return {
//       count: 0
//     }
//   },
//   methods: {
//     addCount() {
//       this.count++
//     }
//   }
// }
</script>