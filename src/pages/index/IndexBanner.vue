<template>
  <swiper
      :modules="modules"
      :loop="true"
      :speed="1000"
      :autoplay="{
        delay:3000,
        disableOnInteraction:false
      }"
      :space-between="30"
      :pagination="{
        clickable:true,
        dynamicBullets: true
      }"
      @swiper="onSwiper"
      @slideChange="onSlideChange">
    <swiper-slide v-for="item in banners" :key="item.targetId">
      <img :src="item.pic" :alt="item.typeTitle">
    </swiper-slide>
  </swiper>
</template>

<script>
import {Pagination, Autoplay} from 'swiper';
import {Swiper, SwiperSlide} from "swiper/vue";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default {
  name: "IndexBanner",
  components: {Swiper, SwiperSlide},
  data() {
    return {
      banners: [],
      modules: [Pagination, Autoplay]
    }
  },
  methods: {
    onSwiper(/* swiper */) {
      // console.log('on swiper', swiper);
    },
    onSlideChange() {
      console.log('on slide change');
    }
  },
  created() {
    this.$axios.get('/banner?type=2')
        .then(res => {
          this.banners = res.data.banners;
        })
        .catch(err => {
          console.error(err);
        })
  }
}
</script>

<style scoped>
.swiper {
  margin: 1rem 1.5rem;
  border-radius: 1rem;
}

.swiper-slide {
  border-radius: 1rem;
  overflow: hidden;
}
</style>