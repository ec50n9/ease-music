<template>
  <div class="nav-wrapper">
    <div class="nav">
      <div v-for="(tab, index) in tabs" :key="index"
           class="nav__item" :class="{'nav__item--on': currentIndex===index}"
           @click="goto(index)">
        {{ tab.title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MusicNav.vue",
  data() {
    return {
      tabs: [
        {title: '歌单', path: '/playList'},
        {title: '排行榜', path: '/rankingList'},
        {title: '歌手', path: '/artistsList'}
      ],
      currentIndex: 0
    }
  },
  methods: {
    goto(index) {
      this.currentIndex = index;
      this.$router.push(this.tabs[index].path);
    }
  }
}
</script>

<style scoped>
.nav-wrapper{
  overflow: auto;
  background: #ffffff;
  z-index: 2;
}

.nav {
  position: relative;
  display: flex;
  background: #F3F4F6;
  margin: 1rem 1.5rem;
  padding: .3rem;
  border-radius: 10rem;
}

.nav__item {
  position: relative;
  flex-grow: 1;
  font-size: 1rem;
  color: #6B7280;
  text-align: center;
  background: transparent;
  padding: .5rem 0;
  border-radius: 10rem;
}

.nav__item--on {
  color: #1D4ED8;
  background: #ffffff;
}
</style>