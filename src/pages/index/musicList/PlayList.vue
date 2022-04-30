<template>
  <ec-list @onLoad="onLoad" @onLoadMore="onLoadMore">
    <div v-for="item in playlists" :key="item.id" class="item" @click="goto(item.id)">
      <img class="item__img" :src="item.coverImgUrl" alt="">
      <div class="item__info">
        <div>
          <img :src="item.creator.avatarUrl" alt="" class="item__avatar">
          <span class="item__author">{{ item.creator.nickname }}</span>
        </div>
        <div class="item__title">{{ item.name }}</div>
        <div class="item__others">
          <div class="item__time">2 天前</div>
          <div class="item__subscribed">🎧{{ item.subscribedCount }}</div>
        </div>
      </div>
    </div>
  </ec-list>
</template>

<script>
import EcList from "@/components/EcList";

export default {
  name: "PlayList",
  components: {EcList},
  data() {
    return {
      limit: 10,
      offset: 0,
      playlists: []
    }
  },
  methods: {
    onLoad(complete, fail) {
      this.offset = 0;
      this.$axios.get('/top/playlist?offset=' + this.offset + '&limit=' + this.limit)
          .then(res => {
            this.playlists = res.data.playlists;
            complete();
          })
          .catch(err => {
            console.error(err);
            fail();
          });
    },
    onLoadMore(complete, fail, nomore) {
      this.offset+=this.limit;
      this.$axios.get('/top/playlist?offset=' + this.offset + '&limit=' + this.limit)
          .then(res => {
            if(res.data.playlists.length){
              this.playlists = this.playlists.concat(res.data.playlists);
              complete();
            }else {
              nomore();
            }
          })
          .catch(err => {
            console.error(err);
            fail();
          });
    },
    goto(id){
      this.$router.push('/playListDetail/'+id);
    }
  }
}
</script>

<style scoped>
.item {
  display: flex;
  width: 100%;
  margin-bottom: 2rem;
}

.item__img {
  width: 8rem;
  height: 8rem;
  border-radius: 1rem;
}

.item__info {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  padding: .5rem 0;
}

.item__avatar {
  width: 1.5rem;
  height: 1.5rem;
  vertical-align: middle;
  border-radius: 50%;
}

.item__author {
  padding-left: .5rem;
  vertical-align: middle;
  color: #6B7280;
  font-size: .9rem;
}

.item__title {
  flex-grow: 1;
  margin-top: 1rem;
  font-size: 1rem;
  font-weight: 600;
}

.item__others {
  display: flex;
  justify-content: space-between;
  font-size: .9rem;
  color: #6B7280;
}
</style>