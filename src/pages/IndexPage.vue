<template>
  <div>
    <header-bar>
      <header-button>
        <i class="fa fa-user-o" aria-hidden="true"></i>
      </header-button>
      <header-button position="right">
        <i class="fa fa-share-square-o" aria-hidden="true"></i>
      </header-button>
    </header-bar>
    <big-title>别来无恙！</big-title>
    <sub-title>这里有一些新歌👇</sub-title>
    <test-swiper>
      <div class="test-item test-item--a"></div>
      <div class="test-item test-item--b"></div>
      <div class="test-item test-item--c"></div>
    </test-swiper>
    <ec-swiper></ec-swiper>
    <MusicNav class="music-nav"></MusicNav>
    <router-view></router-view>
  </div>
</template>

<script>
import MusicNav from "@/components/MusicNav";
import HeaderBar from "@/components/HeaderBar";
import HeaderButton from "@/components/HeaderButton";
import EcSwiper from "@/components/EcSwiper";
import BigTitle from "@/components/BigTitle";
import SubTitle from "@/components/SubTitle";
import TestSwiper from "@/components/TestSwiper";
export default {
  components: {TestSwiper, SubTitle, BigTitle, EcSwiper, HeaderButton, HeaderBar, MusicNav},
  data() {
    return {}
  }
}
</script>

<style scoped>
.music-nav{
  position: sticky;
  top: 0;
}

.test-item{
  width: 100%;
  height: 10rem;
}

.test-item--a{
  background: #6B7280;
}

.test-item--b{
  background: aquamarine;
}

.test-item--c{
  background: cadetblue;
}
</style>