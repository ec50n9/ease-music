<template>
  <div class="item" @click="gotoInfo">
    <img class="item__img" :src="singer.picUrl" alt="">
    <div class="item__name">{{ singer.name }}</div>
  </div>
</template>

<script>
export default {
  name: "SingerItem.vue",
  props: {
    singer: {
      type: Object
    }
  },
  methods:{
    gotoInfo(){
      this.$router.push('/singerInfo?id='+this.singer.id);
    }
  }
}
</script>

<style scoped>
.item{
  margin-bottom: 1em;
}

.item__img{
  width: 100%;
  height: auto;
  object-fit: cover;
}

.item__name{
  text-align: center;
  font-size: .8em;
}
</style>