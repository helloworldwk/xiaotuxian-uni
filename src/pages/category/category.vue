<script setup lang="ts">
import { ref } from 'vue'
import { getHomeBannerAPI } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import type { BannerItem } from '@/types/home'
import type { CategoryTopItem } from '@/types/category'
import { getCategoryTopAPI } from '@/services/category'
import { computed } from 'vue'

import PageSkeleton from './components/PageSeleton.vue'

// 数据是否请求完成
const isFinish = ref(false)

// 获取轮播图数据
const bannerList = ref<BannerItem[]>([])
const getBannerData = async () => {
  const { result } = await getHomeBannerAPI(2)

  bannerList.value = result
}

// 获取商品分类数据
const activeIndex = ref(0)
const categoryList = ref<CategoryTopItem[]>([])
const getCategoryTopData = async () => {
  const { result } = await getCategoryTopAPI()

  categoryList.value = result
}

// 获取当前一级下的二级分类数据
const curCategoryList = computed(() => categoryList.value[activeIndex.value]?.children || [])

// 页面加载
onLoad(async () => {
  await Promise.all([getBannerData(), getCategoryTopData()])

  isFinish.value = true
})
</script>

<template>
  <view class="viewport" v-if="isFinish">
    <!-- 搜索框 -->
    <view class="search">
      <view class="input">
        <text class="icon-search">女靴</text>
      </view>
    </view>
    <!-- 分类 -->
    <view class="categories">
      <!-- 左侧：一级分类 -->
      <scroll-view class="primary" scroll-y>
        <view
          v-for="(item, index) in categoryList"
          :key="item.id"
          class="item"
          :class="{ active: index === activeIndex }"
          @tap="activeIndex = index"
        >
          <text class="name"> {{ item.name }} </text>
        </view>
      </scroll-view>
      <!-- 右侧：二级分类 -->
      <scroll-view class="secondary" scroll-y>
        <!-- 焦点图 -->
        <XtxSwiper class="banner" :list="bannerList" />
        <!-- 内容区域 -->
        <view class="panel" v-for="item in curCategoryList" :key="item.id">
          <view class="title">
            <text class="name">{{ item.name }}</text>
            <navigator class="more" hover-class="none">全部</navigator>
          </view>
          <view class="section">
            <navigator
              v-for="goods in item.goods"
              :key="goods.id"
              class="goods"
              hover-class="none"
              :url="`/pages/goods/goods?id=${goods.id}`"
            >
              <image class="image" :src="goods.picture"></image>
              <view class="name ellipsis">{{ goods.name }}</view>
              <view class="price">
                <text class="symbol">¥</text>
                <text class="number">{{ goods.price }}</text>
              </view>
            </navigator>
          </view>
        </view>
      </scroll-view>
    </view>
  </view>

  <PageSkeleton v-else />
</template>

<style lang="scss">
page {
  height: 100%;
  overflow: hidden;
}

@import './components/styles/ViewPort.scss';
@import './components/styles/Categories.scss';
</style>
