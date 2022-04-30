<template>
  <div ref="swiper" class="test-swiper">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TestSwiper",
  mounted() {
    console.log(this.$refs.swiper.children);
  }
}
</script>

<style>
.test-swiper{
  overflow: hidden;
}

.test-swiper .test-item{
  float: left;
}
</style>