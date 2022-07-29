<template>
  <view class="content">
    <!-- <image class="logo" src="/static/logo.png" /> -->
    <image class="logo" src="@img/logo.png" />
    <view class="text-area">
      <text class="title">11111</text>
    </view>
  </view>
</template>

<script setup lang="ts">
const title = ref('Hello')
</script>

<style lang="scss" scope>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: $primary-color;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 28rpx;
  color: #8f8f94;
}
</style>
