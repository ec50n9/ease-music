<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
  components: {}
}
</script>

<style>
@font-face {
  font-family: 'iconfont';  /* Project id 3355389 */
  src: url('//at.alicdn.com/t/font_3355389_r9he776b91.woff2?t=1651111723196') format('woff2'),
  url('//at.alicdn.com/t/font_3355389_r9he776b91.woff?t=1651111723196') format('woff'),
  url('//at.alicdn.com/t/font_3355389_r9he776b91.ttf?t=1651111723196') format('truetype');
}

#app {
  font-family: Inter,Roboto,Oxygen,Fira Sans,Helvetica Neue,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  margin: 0;
  padding: 0;
}

img {
  border: none;
  max-width: 100%;
  vertical-align: middle;
}

ul {
  list-style: none;
}

.fl{
  float: left;
}

.fr{
  float: right;
}
</style>
