import { http } from '@/utils/http'
import type { CartItem } from '@/types/cart'
// 加入购物车
export const PostAddCartAPI = (data: { skuId: string; count: number }) =>
  http({
    method: 'POST',
    url: '/member/cart',
    data,
  })

// 获取购物车列表
export const getMemberCartAPI = () =>
  http<CartItem[]>({
    method: 'GET',
    url: '/member/cart',
  })
