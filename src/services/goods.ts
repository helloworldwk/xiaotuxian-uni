import { http } from '@/utils/http'
import type { GoodsResult } from '@/types/goods'

/**
 * 商品详情
 * @param id 商品id
 * @returns
 */
export const getGoodsAPI = (id: string) => {
  return http<GoodsResult>({
    method: 'GET',
    url: '/goods',
    data: {
      id,
    },
  })
}
