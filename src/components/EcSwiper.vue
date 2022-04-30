<template>
  <div class="swiper">
    <div ref="swiper" class="items-wrapper">
      <transition-group name="slide">
        <div class="item" v-for="url in [urls[currentIndex]]" :key="url">
          <img :src="url" :alt="url">
        </div>
      </transition-group>
    </div>
    <div class="dots-wrapper">
      <span v-for="(item, index) in urls" :key="index"
            class="dot" :class="{'dot--active':currentIndex===index}"
            @click="setIndex(index)"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "EcSwiper",
  data() {
    return {
      urls: [
        'http://p1.music.126.net/EpanPmTP1p2JKcpjFh0C2A==/109951167348364023.jpg',
        'http://p1.music.126.net/EtDA3SCZbO93BzUFMmSqsg==/109951167347459789.jpg',
        'http://p1.music.126.net/gTJyAtU5l25hlhFD6b_Y2A==/109951167348161935.jpg'
      ],
      currentIndex: 0
    }
  },
  mounted() {
    this.setIndex(0);
  },
  methods: {
    setIndex(index){
      this.currentIndex = index;
      if(this.interval) {
        clearInterval(this.interval);
      }
      const that = this;
      this.interval = setInterval(function () {
        that.currentIndex += 1;
        if (that.currentIndex === 3) {
          that.currentIndex = 0;
        }
      }, 3000);
    }
  },
}
</script>

<style scoped>
.swiper {
  position: relative;
  margin: 1rem 1.5rem;
  border-radius: 1rem;
  overflow: hidden;
}

.items-wrapper {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: hidden;
  width: 100%;
  height: auto;
}

.item {
  flex-shrink: 0;
  width: 100%;
  border-radius: 1em;
  overflow: hidden;
}

.item img {
  width: 100%;
  object-fit: cover;
}

.dots-wrapper {
  position: absolute;
  bottom: .5em;
  display: flex;
  width: 100%;
  justify-content: center;
}

.dot {
  width: .5em;
  height: .5em;
  background: #fff;
  border-radius: .5em;
  opacity: .5;
  transition: width .3s;
}

.dot:not(:first-child) {
  margin-left: .5em;
}

.dot--active {
  width: 2em;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .8s ease;
}

.fade-enter-to,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform .8s ease;
}

.slide-enter-to,
.slide-leave-to {
  transform: translateX(-100%);
}
</style>