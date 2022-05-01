<template>
  <div class="header-button" :class="{fl: position==='left', fr: position==='right'}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "HeaderButton",
  props: {
    position: {
      type: String,
      default: 'left',
      validator(value) {
        return ['left', 'right'].includes(value);
      }
    }
  }
}
</script>

<style scoped>
.header-button {
  width: 3.5rem;
  height: 3.5rem;
  line-height: 3.5rem;
  margin-right: 1rem;
  border: 2px solid #F3F4F6;
  border-radius: 1rem;
  text-align: center;
  color: #1D4ED8;
  font-size: 1.3rem;
}

.fr {
  margin-right: 0;
  margin-left: 1em;
}
</style>