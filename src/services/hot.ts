import { http } from '@/utils/http'
import type { PageParams } from '@/types/global'
import type { HotResult } from '@/types/hot'

/**
 *  热门推荐-(特惠推荐、爆款推荐、一站买全、新鲜好物)-小程序
 * @param url 接口地址
 * @param data 接口参数
 * @returns
 */
type HotParams = PageParams & { subType?: string }
export const getHotDataAPI = (url: string, data?: HotParams) => {
  return http<HotResult>({
    method: 'GET',
    url,
    data,
  })
}
