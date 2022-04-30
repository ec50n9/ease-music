<template>
<div>
  <h2 class="name">{{song.name}}</h2>
  <h3 class="singer">{{joinAuthors(song.ar)}}</h3>
  <img class="pic" :src="song.al.picUrl" :alt="song.name">
  <audio ref="audio" @play="onPlay" @pause="onPause">
    <source :src="songUrl" type="audio/mp3">
  </audio>
  <div class="controller">
    <button @click="startPlayOrPause">{{transPlayPause}}</button>
    <button>下载</button>
  </div>
</div>
</template>

<script>
export default {
  name: "MusicPlay",
  props:{
    id:{type:String}
  },
  data(){
    return {
      songUrl: 'https://music.163.com/song/media/outer/url?id='+this.id+'.mp3',
      song:{
        al:{},
        ar:[]
      },
      audio:{
        playing:false
      }
    }
  },
  methods:{
    joinAuthors(ar) {
      let str = '';
      ar.forEach((item, index, array) => {
        str += item.name + (index === array.length - 1 ? '' : '、');
      });
      return str;
    },
    startPlayOrPause(){
      this.audio.playing?this.pause():this.play();
    },
    play(){
      this.$refs.audio.play()
    },
    pause(){
      this.$refs.audio.pause()
    },
    onPlay(){
      this.audio.playing = true;
    },
    onPause(){
      this.audio.playing = false;
    },
  },
  computed:{
    transPlayPause(){
      return this.audio.playing?'暂停':'播放';
    }
  },
  created() {
    this.$axios.get('/song/detail?ids='+this.id)
      .then(res=>{
        console.log(res.data);
        this.song = res.data.songs[0]
      })
      .catch(err=>{
        console.error(err);
      })
  }
}
</script>

<style scoped>
.name, .singer{
  text-align: center;
}

.name{
  font-size: 1.5em;
}

.singer{
  font-size: 1em;
}

.pic{
  display: block;
  width: 10em;
  height: 10em;
  margin: 2em auto 0;
  object-fit: cover;
}
</style>