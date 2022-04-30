<template>
  <div>
    <h2 class="title">热门歌手</h2>
    <div class="singer-list">
      <SingerItem class="singer-item" v-for="artist in artists" :key="artist.id" :singer="artist"></SingerItem>
    </div>
  </div>
</template>

<script>
import SingerItem from '@/components/SingerItem'

export default {
  name: "SingerPage.vue",
  components: {SingerItem},
  data() {
    return {
      artists: []
    }
  },
  created() {
    this.$axios.get('/toplist/artist')
        .then(res => {
          console.log(res.data);
          this.artists = res.data.list.artists;
        })
        .catch(err => {
          console.error(err);
        });
  }
}
</script>

<style scoped>
.title {
  margin: 1em;
}

.singer-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.singer-item {

}
</style>