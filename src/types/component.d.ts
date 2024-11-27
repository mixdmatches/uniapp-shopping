/**
 * declare module '@vue/runtime-core'
 *   现调整为
 * declare module 'vue'
 */
import XtxSwiper from './XtxSwiper.vue'
import XtxGuess from './XtxGuess.vue'
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    XtxSwiper: typeof XtxSwiper
    XtxGuess: typeof XtxGuess
  }
}

// 组件实例
// InstanceType 可以获取组件类型
export type XtxGuessInstance = InstanceType<typeof XtxGuess>
