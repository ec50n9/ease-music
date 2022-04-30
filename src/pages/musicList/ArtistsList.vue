<template>
  <ec-list @onLoad="onLoad" @onLoadMore="onLoadMore">
    <singer-item class="item" v-for="artist in artists" :key="artist.id" :singer="artist"></singer-item>
  </ec-list>
</template>

<script>
import SingerItem from "@/components/SingerItem";
import EcList from "@/components/EcList";

export default {
  name: "ArtistsList",
  components: {SingerItem, EcList},
  data() {
    return {
      offset: 0,
      limit: 10,
      artists: []
    }
  },
  methods: {
    onLoad(complete, fail) {
      this.offset = 0;
      this.$axios.get('/top/artists?offset='+(this.offset+=this.limit)+'&limit='+this.limit)
          .then(res => {
            this.artists = res.data.artists;
            complete();
          })
          .catch(err => {
            console.error(err);
            fail();
          });
    },
    onLoadMore(complete, fail, nomore){
      this.$axios.get('/top/artists?offset='+(this.offset+=this.limit)+'&limit='+this.limit)
          .then(res => {
            console.log(res.data.artists)
            if(res.data.artists.length){
              this.artists = this.artists.concat(res.data.artists);
              complete();
            }else {
              nomore();
            }
          })
          .catch(err => {
            console.error(err);
            fail();
          });
    }
  }
}
</script>

<style scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 1rem 1.5rem;
}

.item {
  width: 30%;
}
</style>