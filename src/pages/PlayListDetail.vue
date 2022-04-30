<template>
  <div>
    <header-bar>
      <header-button @click="$router.back()">
        <i class="fa fa-chevron-left"></i>
      </header-button>
    </header-bar>
    <div class="cover">
      <img :src="detail.coverImgUrl" :alt="detail.name">
    </div>
    <big-title>{{ detail.name }}</big-title>
    <div class="desc" :class="{'desc--extend': extendDesc}" @click="extendDesc = !extendDesc">{{ detail.description }}</div>
    <ec-list @onLoad="onLoad" @onLoadMore="onLoadMore">
      <music-item v-for="item in songs" :key="item.id" :song="item"></music-item>
    </ec-list>
  </div>
</template>

<script>
import EcList from "@/components/EcList";
import MusicItem from "@/components/MusicItem";
import HeaderBar from "@/components/HeaderBar";
import HeaderButton from "@/components/HeaderButton";
import BigTitle from "@/components/BigTitle";

export default {
  name: "PlayListDetail",
  components: {BigTitle, HeaderButton, HeaderBar, MusicItem, EcList},
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      limit: 20,
      offset: 0,
      detail: {
        name: '加载中...',
        description: '',
        coverImgUrl: '',
        tags: []
      },
      songs: [],
      extendDesc: false
    }
  },
  created() {
    this.$axios.get(`/playlist/detail?id=${this.id}`)
        .then(res => {
          this.detail = res.data.playlist;
        })
  },
  methods: {
    onLoad(complete, fail) {
      this.offset = 0;
      this.$axios.get(`/playlist/track/all?id=${this.id}&offset=${this.offset}&limit=${this.limit}`)
          .then(res => {
            console.log(res);
            this.songs = res.data.songs;
            complete();
          })
          .catch(err => {
            console.error(err);
            fail();
          });
    },
    onLoadMore(complete, fail, nomore) {
      this.offset += 1;
      this.$axios.get(`/playlist/track/all?id=${this.id}&offset=${this.offset}&limit=${this.limit}`)
          .then(res => {
            console.info(this.offset, this.limit);
            console.log('load more: ', res);
            if (res.data.songs.length) {
              this.songs = this.songs.concat(res.data.songs);
              complete();
            } else {
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
.cover {
  max-width: 40%;
  height: auto;
  padding: 1.5rem 1.5rem 0;
}

.cover > img {
  width: 100%;
  border-radius: 1rem;
}

.desc {
  margin: 1rem 1.5rem 1rem;
  max-height: 6rem;
  overflow: scroll;
  line-height: 1.5;
  color: #6B7280;
  font-size: .9rem;
  transition: max-height .3s ease;
}

.desc--extend{
  max-height: 99rem;
}
</style>