<template>
  <!-- 购物车 - 普通页面 -->
  <view>
    <CartMain :is-tab-bar="false" />
  </view>
</template>

<script setup lang="ts">
import CartMain from './components/CartMain.vue'
</script>
