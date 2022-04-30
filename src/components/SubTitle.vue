<template>
<div class="sub-title">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: "SubTitle"
}
</script>

<style scoped>
.sub-title{
  margin-top: .75rem;
  margin-bottom: 2rem;
  padding: 0 1.5rem;
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 700;
}
</style>