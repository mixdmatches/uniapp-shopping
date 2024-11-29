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

// 删除/清空购物车
export const deleteMemberCartAPI = (data: { ids: string[] }) =>
  http({
    method: 'DELETE',
    url: '/member/cart',
    data,
  })

// 修改购物车商品

export const putMemberCartAPI = (skuId: string, data: { selected?: boolean; count?: number }) =>
  http({
    method: 'PUT',
    url: `/member/cart/${skuId}`,
    data,
  })

// 购物车全选/取消全选
export const putMemberCartSelectedAPI = (data: { selected: boolean }) =>
  http({
    method: 'PUT',
    url: '/member/cart/selected',
    data,
  })
