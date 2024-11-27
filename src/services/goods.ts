import { http } from '@/utils/http'
import type { GoodsResult } from '@/types/goods'
export const getGoodsDetailAPI = (id: string) =>
  http<GoodsResult>({
    method: 'GET',
    url: '/goods',
    data: {
      id,
    },
  })
