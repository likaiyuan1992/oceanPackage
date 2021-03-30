<template>
  <div class="home">
    <div class="head">
      <div class="head_center flex flex-sb flex-ac">
        <span class="logo"><img
          src="//17536101.s21i.faiusr.com/4/ABUIABAEGAAg8OOS3QUotM_x8AYwrAI4Zw.png"
          alt=""
        ></span>
        <i class="h4_txt">Your overseas office</i>
        <div class="flex flex-ac">
          <div class="right_phone flex flex-dc flex-jb flex1">
            <p>服务热线</p>
            <p>05250525</p>
          </div>
          <span class="r_img"><img
            src="//12452007.s61i.faiusr.com/4/AD0Ip4H4BRAEGAAgvrWYwwUovtWd1AIwNDg4.png"
            alt=""
          ></span>
        </div>
      </div>
    </div>
    <main>
      <div class="main_tab flex">
        <span
          v-for="item in tabData"
          :key="item.key"
        >
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
  </div>
</template>

<script>
import fooBar from '../components/footBar'
export default {
  components: {
    fooBar
  },
  data () {
    return {
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
</style>
