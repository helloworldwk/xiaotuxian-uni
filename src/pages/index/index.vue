<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/services/home'
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'

import type { BannerItem, CategoryItem, HotItem } from '@/types/home'

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
onLoad(() => {
  getHomeBannerData()
  getHomeCategoryData()
  getHomeHotData()
})
</script>

<template>
  <!-- 自定义导航栏 -->
  <CustomNavbar />
  <!-- 自定义轮播图 -->
  <XtxSwiper :list="bannerList" />
  <!-- 分类 -->
  <CategoryPanel :list="categoryList" />
  <!-- 热门推荐 -->
  <HotPanel :list="hotList" />
  <view class="index">index</view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
}
</style>
