import { ref } from 'vue'
import type { XtxGuessInstance } from '@/types/component'
/**
 * 猜你喜欢组合式函数
 * @returns
 */
export const useGuessList = () => {
  // 获取猜你喜欢组件实例
  const guessRef = ref<XtxGuessInstance>()

  // 滚动处理事件函数
  const onScrollTolower = () => {
    console.log(123)
    guessRef.value?.getMore()
  }
  return {
    guessRef,
    onScrollTolower,
  }
}
