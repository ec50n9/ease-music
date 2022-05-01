<template>
  <div>
    <header-bar>
      <header-button>
        <i class="fa fa-user" aria-hidden="true"></i>
      </header-button>
      <header-button position="right">
        <i class="fa fa-search" aria-hidden="true"></i>
      </header-button>
    </header-bar>
    <big-title>别来无恙！</big-title>
    <sub-title>这里有一些新歌👇</sub-title>
    <index-banner></index-banner>
    <music-nav class="music-nav"></music-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import MusicNav from "@/pages/index/MusicNav";
import HeaderBar from "@/components/HeaderBar";
import HeaderButton from "@/components/HeaderButton";
import BigTitle from "@/components/BigTitle";
import SubTitle from "@/components/SubTitle";
import IndexBanner from "@/pages/index/IndexBanner";

export default {
  components: {IndexBanner, SubTitle, BigTitle, HeaderButton, HeaderBar, MusicNav},
  data() {
    return {}
  }
}
</script>

<style scoped>
.music-nav {
  position: sticky;
  top: 0;
}
</style>