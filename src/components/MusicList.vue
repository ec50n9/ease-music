<template>
  <div class="music-list">
    <div class="panel">
      <ul class="list">
        <MusicItem v-for="song in musicData.songs" :song="song" :key="song.id"></MusicItem>
      </ul>
    </div>
  </div>
</template>

<script>
import MusicItem from "@/components/MusicItem";
export default {
  name: "MusicList",
  components: {MusicItem},
  props:{
    musicId:{
      type:String,
      default:'2884035'
    },
    limit:{
      type:Number,
      default: 20
    },
    offset:{
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      loading: true,
      musicData: {
        songs: []
      }
    }
  },
  created() {
    const musicListUrl = `/playlist/track/all?id=${this.musicId}&limit=${this.limit}&offset=${this.offset}`;
    this.$axios.get(musicListUrl)
        .then(res => {
          this.musicData = res.data;
          this.loading = false;
          console.log(res.data);
        })
        .catch(err => {
          console.error(err);
        });
  }
}
</script>

<style scoped>

</style>