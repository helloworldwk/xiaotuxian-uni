<template>
  <!-- 购物车 - 普通页面 -->
  <CartMain :is-tab-bar="false" />
</template>

<script setup lang="ts">
import CartMain from './components/CartMain.vue'
</script>

<style lang="scss">
page {
  height: 100%;
}
</style>
