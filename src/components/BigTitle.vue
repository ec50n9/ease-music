<template>
<div class="big-title">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: "BigTitle"
}
</script>

<style scoped>
.big-title{
  margin-top: .5rem;
  padding: 0 1.5rem;
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 700;
}
</style>