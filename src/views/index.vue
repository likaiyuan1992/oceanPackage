<template>
  <div class="home">
    <div class="head">
      <div class="head_center flex flex-sb flex-ac">
        <span class="logo"><img src="//17536101.s21i.faiusr.com/4/ABUIABAEGAAg8OOS3QUotM_x8AYwrAI4Zw.png"
               alt=""></span>
        <i class="h4_txt">Your overseas office</i>
        <div class="flex flex-ac">
          <div class="right_phone flex flex-dc flex-jb flex1">
            <p>服务热线</p>
            <p>05250525</p>
          </div>
          <span class="r_img"><img src="//12452007.s61i.faiusr.com/4/AD0Ip4H4BRAEGAAgvrWYwwUovtWd1AIwNDg4.png"
                 alt=""></span>
          <span @click='show=true'
                class="mian_img"><img src="../../static/common/icon/mianbaoxie.png"
                 alt=""></span>
        </div>
      </div>
    </div>
    <main>
      <div class="main_tab flex">
        <span v-for="item in tabData"
              :key="item.key">
          <router-link :to="item.url">
            {{ item.title }}
          </router-link>
        </span>
      </div>
      <div class="contain">
        <router-view />
      </div>
    </main>
    <footer>
      <fooBar />
    </footer>
    <p v-show="arrowShow"
       @click="scollTop"
       class="fixedImg"><img :src="require('../../static/common/icon/toUp.png')"
           alt="">
    </p>
    <!-- 移动端右侧栏 -->
    <div :class="{hide_bar:!show}"
         class="right_bar"
         @click="hideBar($event)">
      <ul>
        <li :class="{active: i===index,bar_li:true}"
            @click="index=i"
            v-for="(item,i) in tabData"
            :key="item.key">
          <router-link :to="item.url">
            {{ item.title }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import fooBar from '../components/footBar'
export default {
  components: {
    fooBar
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, true)
    this.calcWidth()
  },
  methods: {
    hideBar(e) {
      if (e.target.offsetParent && e.target.offsetParent.classList.value === 'active bar_li' || e.target.classList.value === 'right_bar') {
        this.show = false
      } else {
        this.show = true
      }
    },

    calcWidth() {
      let sceenW = window.innerWidth
      if (sceenW > 700) {
        this.phonWay = false
      } else {
        this.phonWay = true
      }
    },
    scollTop() {
      window.scroll(0, 0);
    },
    handleScroll(e) {
      let scrollTop = e.target.documentElement.scrollTop || e.target.body.scrollTop;      // 执行代码
      if (scrollTop > 200) {
        this.arrowShow = true
      } else {
        this.arrowShow = false
      }
    },
  }
  ,
  data() {
    return {
      show: false,
      index: 0,
      phonWay: false,
      arrowShow: false,
      tabData: [
        {
          title: '首页',
          key: '1',
          url: '/home'
        },
        {
          title: '服务案列',
          key: '3',
          url: '/example'
        }, {
          title: '联系方式',
          key: '4',
          url: '/contract'
        }, {
          title: '关于我们',
          key: '5',
          url: '/aboutUs'
        }
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
.home {
  .head {
    height: 100%;
    background-color: #1890ff;
    .head_center {
      height: 100%;
      width: 56%;
      margin: 0 auto;
      transform: translateX(-6%);
      .h4_txt {
        font-size: 32px;
        font-weight: bold;
        color: #fff;
      }
      .right_phone {
        p {
          margin: 0;
          font-size: 16px;
          color: rgb(255, 255, 255);
          font-weight: bold;
        }
      }
      .r_img {
        margin-left: 10px;
      }
    }
  }
  main {
    width: 54%;
    margin: 0 auto;
    min-height: calc(100vh - 363px);
    .main_tab {
      a {
        padding: 0 40px;
        text-align: center;
        display: inline-block;
        line-height: 60px;
        font-size: 16px;
        position: relative;
        display: flex;
        align-items: center;
        &::after {
          content: "";
          display: block;
          position: absolute;
          right: 0;
          width: 1px;
          height: 20px;
          background-color: #dbdbdb;
        }
      }
    }
  }
}
.logo img,
.r_img img {
  width: 100%;
  height: 100%;
}
.right_bar {
  position: fixed;
  z-index: 99999;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  transition: all linear 0.4s;
  ul {
    transition: all linear 2s;
    position: fixed;
    z-index: 9999;
    right: 0;
    height: 100%;
    width: 70%;
    background-color: rgb(255, 255, 255);
    li {
      padding: 0 10px;
      font-size: 8px;
      height: 36px;
      line-height: 36px;
      border-bottom: 1px solid #f0f0f0;
      position: relative;
      a {
        position: absolute;
        top: 0;
        left: 10px;
        height: 100%;
        width: 100%;
        color: #333333;
        &::before {
          display: none;
        }
      }
      &.active {
        background-color: #1890ff;
        a {
          color: #fff;
        }
      }
    }
  }
}
.hide_bar {
  display: none;
  ul {
    right: -70%;
  }
}
</style>
<style>
.router-link-exact-active {
  /* border-bottom: 1px solid #40a9ff */
  position: relative;
  justify-content: center;
}
.router-link-exact-active::before {
  content: "";
  position: absolute;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);
  width: 50%;
  height: 1px;
  background-color: #40a9ff;
}
.fixedImg {
  position: fixed;
  z-index: 999;
  right: 30px;
  bottom: 30px;
  width: 26px;
  height: 26px;
  border-radius: 99px;
  box-shadow: 2px 2px 2px #888888;
  background-color: #fff;
  opacity: 0.8;
}
.mian_img {
  right: 5px;
  width: 26px;
  margin-left: 5px;
  display: none;
}
</style>
