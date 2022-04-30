<template>
  <div>
    <audio ref="audio" @play="onPlay" @pause="onPause">
      <source :src="songUrl" type="audio/mp3">
    </audio>
  </div>
</template>

<script>
export default {
  name: "AudioPlayer",
  props:{
    url:{
      type: String
    }
  },
  data(){
    return {
      audio:{
        playing: false
      }
    }
  },
  computed:{
    playText(){
      return this.audio.playing?'暂停':'播放';
    }
  },
  methods:{
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
}
</script>

<style scoped>

</style>