// 通用分页结果类型
export type PageResult<T> = {
  items: T[]
  counts: number
  page: number
  pages: number
  pageSize: number
}

export type PageParams = {
  page?: number
  pageSize?: number
}

export type GoodsItem = {
  /** 商品描述 */
  desc: string
  /** 商品折扣 */
  discount: number
  /** id */
  id: string
  /** 商品名称 */
  name: string
  /** 商品已下单数量 */
  orderNum: number
  /** 商品图片 */
  picture: string
  /** 商品价格 */
  price: number
}
