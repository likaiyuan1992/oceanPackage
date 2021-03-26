<template>
  <div class="home">
    <div class="head">
      <div class="head_center flex flex-sb flex-ac">
        <span><img
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
  </div>
</template>

<script>
export default {
  data () {
    return {
      tabData: [
        {
          title: '首页',
          key: '1',
          url: '/home'
        },
        {
          title: '公司简介',
          key: '2',
          url: '/companyInfo'
        }, {
          title: '服务案列',
          key: '3',
          url: '/example'
        }, {
          title: '联系方式',
          key: '4',
          url: '/contract'
        }, {
          title: '加入我们',
          key: '5',
          url: '/joinUs'
        }
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
.home {
  height: 130px;
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
</style>
