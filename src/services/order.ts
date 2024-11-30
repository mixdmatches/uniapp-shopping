import type {
  OrderCreateParams,
  OrderCreateResult,
  OrderLogisticResult,
  OrderPreResult,
  OrderResult,
} from '@/types/order'
import { http } from '@/utils/http'
export const getMemberOrderPreAPI = () =>
  http<OrderPreResult>({
    method: 'GET',
    url: '/member/order/pre',
  })

// 获取立即购买订单
export const getMemberOrderPreNowAPI = (data: {
  skuId: string
  count: number
  addressId?: string
}) =>
  http<OrderPreResult>({
    method: 'GET',
    url: '/member/order/pre/now',
    data,
  })

// 提交订单
export const postMemberOrderAPI = (data: OrderCreateParams) =>
  http<OrderCreateResult>({
    method: 'POST',
    url: '/member/order',
    data,
  })

// 获取订单详情
export const getMemberOrderByIdAPI = (id: string) =>
  http<OrderResult>({
    method: 'GET',
    url: `/member/order/${id}`,
  })

// 获取支付参数
export const getPayWxPayMiniPay = (orderId: string) =>
  http<WechatMiniprogram.RequestPaymentOption>({
    method: 'GET',
    url: '/pay/wxPay/miniPay',
    data: {
      orderId,
    },
  })

// 内测版
export const getPayMockAPI = (orderId: string) => {
  return http({
    method: 'GET',
    url: '/pay/mock',
    data: {
      orderId,
    },
  })
}

/**
 * 模拟发货-内测版
 * @description 在DEV环境下使用，仅在订单状态为待发货时，可模拟发货，调用后订单状态修改为待收货，包含模拟物流。
 * @param id 订单id
 */
export const getMemberOrderConsignmentByIdAPI = (id: string) => {
  return http({
    method: 'GET',
    url: `/member/order/consignment/${id}`,
  })
}

/**
 * 确认收货
 * @description 仅在订单状态为待收货时，可确认收货。
 * @param id 订单id
 */
export const putMemberOrderReceiptByIdAPI = (id: string) => {
  return http<OrderResult>({
    method: 'PUT',
    url: `/member/order/${id}/receipt`,
  })
}

/**
 * 获取订单物流
 * @description 仅在订单状态为待收货，待评价，已完成时，可获取物流信息。
 * @param id 订单id
 */
export const getMemberOrderLogisticsByIdAPI = (id: string) => {
  return http<OrderLogisticResult>({
    method: 'GET',
    url: `/member/order/${id}/logistics`,
  })
}

/**
 * 删除订单
 * @description 仅在订单状态为待评价，已完成，已取消时，可删除订单。
 * @param data ids 订单集合
 */
export const deleteMemberOrderAPI = (data: { ids: string[] }) => {
  return http({
    method: 'DELETE',
    url: `/member/order`,
    data,
  })
}
