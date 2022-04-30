<template>
  <div class="ec-list">
    <div :style="{height: distance+'px', 'line-height': distance+'px'}" class="pull-refresh"
         :class="{'pull-refresh--animate': pullStatus>2}">
      {{ pullTexts[pullStatus] }}
    </div>
    <div v-if="failToRefresh" class="empty-tip" @click="load">
      服务器走丢啦！
    </div>
    <div ref="dataList" class="data-list" @touchstart="touchStart" @touchend="touchEnd" @touchmove="touchMove">
      <slot></slot>
    </div>
    <div class="load-more" :class="{'load-more--show':loadMoreStatus>0}">
      {{loadMoreTexts[loadMoreStatus]}}
    </div>
  </div>
</template>

<script>
export default {
  name: "EcList",
  props:{
    loadMoreTimeOut:{
      type: Number,
      default: 10000,
    }
  },
  emits: ['onLoad', 'onCancel', 'onLoadMore'],
  data() {
    return {
      startPosition: 0,
      endPosition: 0,
      distance: 0,
      pullStatus: 0, // 0下拉即可刷新 1松手刷新 2超长 3加载中 4加载取消 5加载失败 6加载成功
      pullTexts: ["👇 再往下拉点", "🖐 够了，可以松手了", "🖐🥵 你还拉？快松开啊！", "🕖 加载中...", "🏃 加载取消", "❌ 加载失败", "👌 加载成功"],
      failToRefresh: false,
      loadMoreStatus: 0,
      loadMoreTexts: ["🖐 你看不到我", "🕖 加载中...", "❌ 加载失败", "✋ 真的到头啦！"],
      loadMoreTimer: null
    }
  },
  methods: {
    load() {
      this.pullStatus = 3;
      this.distance=100;
      this.$emit('onLoad', this.complete, this.fail);
    },
    cancel() {
      this.pullStatus = 4;
      this.distance = 0;
      this.$emit('onCancel');
    },
    complete() {
      this.pullStatus = 6;
      this.distance = 0;
    },
    fail() {
      this.pullStatus = 5;
      this.distance = 0;
      this.failToRefresh = true;
    },
    loadMore(){
      this.loadMoreStatus = 1;
      this.loadMoreTimer = setTimeout(this.loadMoreFail, this.loadMoreTimeOut);
      this.$emit('onLoadMore', this.loadMoreComplete, this.loadMoreFail, this.noMore);
    },
    resetLoadMore(){
      if(this.loadMoreTimer){
        clearTimeout(this.loadMoreTimer);
        this.loadMoreTimer = null;
      }
    },
    loadMoreComplete(){
      this.loadMoreStatus = 0;
      this.resetLoadMore();
    },
    loadMoreFail(){
      this.loadMoreStatus = 2;
      this.resetLoadMore();
    },
    noMore(){
      this.loadMoreStatus = 3;
      this.resetLoadMore();
    },
    touchStart(e) {
      this.startPosition = e.touches[0].pageY;
    },
    touchMove(e) {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop < 1) {
        let distance = e.touches[0].pageY - this.startPosition;
        if (distance > 0) {
          e.preventDefault();
          if (distance > 200) {
            this.pullStatus = 2;
          }else if(distance > 100){
            this.pullStatus = 1;
          } else {
            this.pullStatus = 0;
          }
          this.distance = distance;
        }
      }else {
        if(this.loadMoreStatus===0||this.loadMoreStatus===2) {
          const clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
          const height = this.$refs.dataList.offsetTop + this.$refs.dataList.offsetHeight;
          if (height - scrollTop - clientHeight < 500) {
            this.loadMore();
          }
        }
      }
    },
    touchEnd() {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop ===0) {
        if(this.distance >= 100){
          this.load();
        }else {
          this.cancel();
        }
      }
    }
  },
  created() {
    this.load();
  }
}
</script>

<style scoped>
.pull-refresh {
  text-align: center;
  color: #6B7280;
  background: #F3F4F6;
  overflow: hidden;
}

.pull-refresh--animate{
  transition-property: height, line-height;
  transition-duration: .3s;
  transition-timing-function: ease;
}

.empty-tip{
  padding: 4rem;
  text-align: center;
  color: #6B7280;
  background: #F3F4F6;
}

.data-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 1rem 1.5rem;
}

.load-more{
  height: 0;
  line-height: 0;
  overflow: hidden;
  text-align: center;
  color: #6B7280;
  background: #F3F4F6;
  /*transition-property: height, line-height;*/
  /*transition-duration: .3s;*/
  /*transition-timing-function: ease;*/
}

.load-more--show{
  height: 4rem;
  line-height: 4rem;
}
</style>