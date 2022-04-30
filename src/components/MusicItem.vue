<template>
  <div class="song" @click="gotoPlay">
    <div class="poster" v-if="song.al.picUrl"><img :src="song.al.picUrl" :alt="song.name"></div>
    <div class="info">
      <div class="info__name">{{ song.name }}</div>
      <div class="info__author">{{ joinAuthors(song.ar) }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MusicItem",
  props:{
    song: {
      type: Object
    }
  },
  methods: {
    joinAuthors(ar) {
      let str = '';
      ar.forEach((item, index, array) => {
        str += item.name + (index === array.length - 1 ? '' : '、');
      });
      return str;
    },
    gotoPlay(){
      this.$router.push('/musicPlay?id='+this.song.id);
    }
  }
}
</script>

<style scoped>
.song {
  padding: .5em 0;
  margin: 0 1em;
  background: #fff;
  border-bottom: 1px solid #D1D5DB;
}

.poster {
  display: inline-block;
  width: 3em;
  height: 3em;
}

.poster > img {
  width: 100%;
  height: 100%;
}

.info {
  display: inline-block;
  vertical-align: middle;
  margin-left: 1em;
  max-width: calc(100% - 4em);
}

.info__name {
  font-size: 1em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.info__author {
  font-size: .8em;
  color: #6B7280;
}
</style>