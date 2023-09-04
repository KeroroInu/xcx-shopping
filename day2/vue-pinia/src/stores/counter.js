import { defineStore } from "pinia"
import { ref, computed } from "vue"

export const useCounterStore = defineStore('counter', () => {
  // 数据
  const count = ref(0)
  // 方法
  const increment = () => count.value++
  // 计算属性
  const double = computed(() => count.value * 2)
  // 以对象形式返回
  return {
    count,
    increment,
    double
  }
})