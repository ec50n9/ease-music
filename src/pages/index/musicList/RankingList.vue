<template>
  <ec-list @onLoad="onLoad" @onLoadMore="onLoadMore">
    <div v-for="item in topList" :key="item.id" class="item" :class="{'item--sm':!item.tracks.length}">
      <img class="item__img" :src="item.coverImgUrl" :alt="item.name">
      <div class="item__info">
        <div class="item__update">{{ item.updateFrequency }}</div>
        <div class="item__tracks">
          <div v-for="(track, index) in item.tracks" :key="index" class="item__track">
            <span style="color: #000; font-size: 1rem">{{ index + 1 }}. {{ track.first }}</span> - {{ track.second }}
          </div>
        </div>
      </div>
    </div>
  </ec-list>
</template>

<script>
import EcList from "@/components/EcList";

export default {
  name: "RankingList",
  components: {EcList},
  data() {
    return {
      topList: []
    }
  },
  methods: {
    onLoad(complete, fail) {
      this.offset = 0;
      this.$axios.get('/toplist/detail')
          .then(res => {
            this.topList = res.data.list;
            complete();
          })
          .catch(err => {
            console.error(err);
            fail();
          });
    },
    onLoadMore(complete, fail, nomore){
      nomore();
    }
  }
}
</script>

<style scoped>
.item {
  position: relative;
  display: flex;
  align-items: flex-end;
  width: 100%;
  border-bottom: 2px solid #F3F4F6;
  padding: 1rem 0 2rem;
}

.item--sm {
  display: block;
  width: 40%;
  border: none;
  margin: 2rem 0 0;
  padding: 0;
}

.item--sm .item__img {
  width: 100%;
  height: auto;
  object-fit: contain;
}

.item--sm .item__update {
  position: absolute;
  top: .5rem;
  right: .5rem;
  color: #F3F4F6;
  font-weight: 700;
  padding: .2rem .5rem;
  border-radius: 1rem;
}

.item__img {
  width: 7rem;
  height: 7rem;
  border-radius: 1rem;
  object-fit: cover;
}

.item__info {
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  flex-grow: 1;
  overflow: hidden;
}

.item__update {
  font-size: .8rem;
  color: #6B7280;
  text-align: right;
}

.item__tracks {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  line-height: 1rem;
  font-size: .8rem;
}

.item__track {
  margin-top: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #6B7280;
}
</style>