<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import { getHomeBannerAPI } from '@/services/home'
import CustomNavbar from './components/CustomNavbar.vue'

import type { BannerItem } from '@/types/home'

const bannerList = ref<BannerItem[]>([])
// 请求首页轮播图的数据
const getHomeBannerData = async () => {
  const { result } = await getHomeBannerAPI(1)

  bannerList.value = result
}
onLoad(() => {
  getHomeBannerData()
})
</script>

<template>
  <!-- 自定义导航栏 -->
  <CustomNavbar />
  <!-- 自定义轮播图 -->
  <XtxSwiper :list="bannerList" />
  <view class="index">index</view>
</template>

<style lang="scss">
//
</style>
