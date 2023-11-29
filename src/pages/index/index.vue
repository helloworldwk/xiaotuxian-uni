<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/services/home'
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import PageSkeleton from './components/PageSkeleton.vue'

import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import type { XtxGuessInstance } from '@/types/component'

// 请求首页轮播图的数据
const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const { result } = await getHomeBannerAPI(1)

  bannerList.value = result
}

// 请求首页分类的数据
const categoryList = ref<CategoryItem[]>([])
const getHomeCategoryData = async () => {
  const { result } = await getHomeCategoryAPI()

  categoryList.value = result
}

// 请求首页热门推荐的数据
const hotList = ref<HotItem[]>([])
const getHomeHotData = async () => {
  const { result } = await getHomeHotAPI()

  hotList.value = result
}
onLoad(async () => {
  isLoading.value = true

  await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHomeHotData()])

  isLoading.value = false
})

const guessRef = ref<XtxGuessInstance>()
// 滚动触底触发
const scrolltolowerHandler = () => {
  guessRef.value?.getMore()
}

// 加载状态
const isLoading = ref(false)
// 下拉刷新状态(true为已触发, false为未触发)
const isTriggered = ref(false)
// 下拉刷新触发的函数
const refresherrefreshHandler = async () => {
  isTriggered.value = true

  // 重置猜你喜欢组件的数据
  guessRef.value?.resetData()
  // 重新请求轮播图、分类、热门推荐
  await Promise.all([
    getHomeBannerData(),
    getHomeCategoryData(),
    getHomeHotData(),
    guessRef.value?.getMore(),
  ])

  isTriggered.value = false
}
</script>

<template>
  <!-- 自定义导航栏 -->
  <CustomNavbar />

  <!-- 滚动容器 -->
  <scroll-view
    scroll-y
    @scrolltolower="scrolltolowerHandler"
    @refresherrefresh="refresherrefreshHandler"
    refresher-enabled
    :refresher-triggered="isTriggered"
  >
    <!-- 骨架屏 -->
    <PageSkeleton v-if="isLoading" />

    <template v-else>
      <!-- 自定义轮播图 -->
      <XtxSwiper :list="bannerList" />
      <!-- 分类 -->
      <CategoryPanel :list="categoryList" />
      <!-- 热门推荐 -->
      <HotPanel :list="hotList" />
      <!-- 猜你喜欢 -->
      <XtxGuess ref="guessRef" />
    </template>
  </scroll-view>
</template>

<style lang="scss">
page {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #f7f7f7;
}
</style>
