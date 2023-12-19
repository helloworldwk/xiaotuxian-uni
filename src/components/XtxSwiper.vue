<script setup lang="ts">
import { ref } from 'vue'
import type { BannerItem } from '@/types/home'

defineProps<{
  list: BannerItem[]
}>()
const activeIndex = ref(0)

// 当swiper下标发生变化时触发
// UniHelper为uni-app提供事件类型
const onChange: UniHelper.SwiperOnChange = (ev) => {
  activeIndex.value = ev.detail.current
}
</script>

<template>
  <view class="carousel">
    <swiper :circular="true" autoplay :interval="3000" @change="onChange">
      <swiper-item v-for="item of list" :key="item.id">
        <navigator url="/pages/index/index" hover-class="none" class="navigator">
          <image mode="aspectFill" class="image" :src="item.imgUrl"></image>
        </navigator>
      </swiper-item>
    </swiper>
    <!-- 指示点 -->
    <view class="indicator">
      <text
        v-for="(item, index) in list"
        :key="item.id"
        class="dot"
        :class="{ active: index === activeIndex }"
      ></text>
    </view>
  </view>
</template>

<style lang="scss">
@import '@/components/styles/XtxSwiper.scss';
</style>
