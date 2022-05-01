<template>
  <div class="music-play">
    <header-bar>
      <header-button @click="this.$router.back()"><i class="fa fa-chevron-left" aria-hidden="true"></i></header-button>
    </header-bar>
    <div class="pic-wrapper">
      <img class="pic" :src="song.al.picUrl" :alt="song.name">
    </div>
    <div class="bottom-wrapper">
      <div class="info">
        <h2 class="info__name">{{ song.name }}</h2>
        <h3 class="info__singer">{{ joinAuthors(song.ar) }}</h3>
      </div>
      <div class="controller">
        <audio ref="audio" @play="onPlay" @pause="onPause" hidden
          @timeupdate="onUpdateTime">
          <source :src="songUrl" type="audio/mp3">
        </audio>
        <div class="ctrl__progress">
          <progress class="progress" value="22" max="100"></progress>
          <div class="progress__time">{{audio.curTime}}</div>
          <div class="progress__time">04:19</div>
        </div>
        
        <div class="buttons-wrapper">
          <button class="button button--play" @click="startPlayOrPause">
            <i class="fa" :class="[audio.playing?'fa-pause':'fa-play']" aria-hidden="true"></i>
          </button>
          <button class="button button--download">
            <i class="fa fa-download" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBar from "@/components/HeaderBar.vue";
import HeaderButton from "@/components/HeaderButton.vue";
export default {
  name: "MusicPlay",
  props: {
    id: { type: String }
  },
  data() {
    return {
      songUrl: "https://music.163.com/song/media/outer/url?id=" + this.id + ".mp3",
      song: {
        al: {},
        ar: []
      },
      audio: {
        playing: false,
        totalTime: '00:00',
        curTime:'00:00'
      }
    };
  },
  methods: {
    joinAuthors(ar) {
      let str = "";
      ar.forEach((item, index, array) => {
        str += item.name + (index === array.length - 1 ? "" : "、");
      });
      return str;
    },
    startPlayOrPause() {
      this.audio.playing ? this.pause() : this.play();
    },
    play() {
      this.$refs.audio.play();
    },
    pause() {
      this.$refs.audio.pause();
    },
    onPlay() {
      this.audio.playing = true;
    },
    onPause() {
      this.audio.playing = false;
    },
    onUpdateTime(e){
      this.audio.curTime = this.s_to_hs(e.target.currentTime)
    },
    // 秒数转换分+秒
    s_to_hs(s) {
      var h;
      h = Math.floor(s / 60);
      s = Math.floor(s % 60);
      h += '';
      s += '';
      h = (h.length == 1) ? '0' + h : h;
      s = (s.length == 1) ? '0' + s : s;
      if (isNaN(h)) {
        return "&infin;"
      }
      return h + ':' + s;
    }
  },
  computed: {
    transPlayPause() {
      return this.audio.playing ? "暂停" : "播放";
    }
  },
  created() {
    this.$axios.get("/song/detail?ids=" + this.id)
      .then(res => {
        console.log(res.data);
        this.song = res.data.songs[0];
      })
      .catch(err => {
        console.error(err);
      });
  },
  components: { HeaderBar, HeaderButton }
}
</script>

<style scoped>
.music-play {
  position: relative;
  height: 100%;
}

.pic-wrapper {
  position: relative;
  width: 70%;
  height: 0;
  padding-bottom: 70%;
  margin: 0 auto;
  border-radius: 1rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  overflow: hidden;
}

.pic {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.bottom-wrapper {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem;
  box-sizing: border-box;
}

.info__name {
  font-size: 1.5rem;
}

.info__singer {
  font-size: 1rem;
  font-weight: normal;
  color: #6B7280;
}

.ctrl__progress {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.ctrl__progress .progress{
  width: 100%;
  height: 1rem;
}

.progress__time{
  font-size: .8rem;
  color: #6B7280;
}

.buttons-wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.button{
  width: 4rem;
  height: 4rem;
  color: #ffffff;
  background-color: #3B82F6;
  font-size: 1.5rem;
  border: none;
  border-radius: 50%;
}

.button--download{
  display: none;
  color: #6B7280;
  background-color: transparent;
}
</style>