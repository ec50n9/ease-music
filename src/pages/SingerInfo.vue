<template>
 <div>
   <h2 class="title">详情页</h2>
   <div>
     <MusicItem v-for="song in songs" :key="song.id" :song="song"></MusicItem>
   </div>
 </div>
</template>

<script>
import MusicItem from "@/components/MusicItem";
export default {
  name: "SingerInfo",
  components: {MusicItem},
  props:{
    id:{
      type: String
    }
  },
  data(){
    return {
      songs:[]
    }
  },
  created() {
    this.$axios.get('/artist/songs?id='+this.id)
      .then(res=>{
        console.log(res);
        this.songs = res.data.songs
      })
      .catch(err=>{
        console.error(err);
      })
  }
}
</script>

<style scoped>
.title{
  margin: 1em;
}
</style>