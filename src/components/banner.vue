<template>
  <a-carousel arrows
              autoplay>
    <div slot="prevArrow"
         class="custom-slick-arrow"
         style="left: 10px;zIndex: 1">
      <a-icon type="left-circle" />
    </div>
    <div slot="nextArrow"
         class="custom-slick-arrow"
         style="right: 10px">
      <a-icon type="right-circle" />
    </div>
    <div v-for="(item,index) in bannerData"
         :key='index'>
      <img :src="item"
           alt="">
    </div>

  </a-carousel>
</template>
<script>
export default {
  data() {
    return {
      bannerData: []
    }
  },
  created() {
    this.getBanner()
  },
  methods: {
    getBanner() {
      this.api.getBanner({}).then(res => {
        if (res.banerUlr.length) {
          this.bannerData = res.banerUlr
        }
      })
    }
  }
}
</script>
<style scoped>
/* For demo */
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 450px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel >>> .custom-slick-arrow {
  width: 25px;
  height: 25px;
  font-size: 30px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
}
.ant-carousel >>> .custom-slick-arrow:before {
  display: none;
}
.ant-carousel >>> .custom-slick-arrow:hover {
  opacity: 0.5;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
</style>
