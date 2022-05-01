<template>
<div class="header-bar">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: "HeaderBar"
}
</script>

<style>
.header-bar{
  padding: 1.5rem 1.5rem;
  overflow: auto;
  background: #fff;
}
</style>