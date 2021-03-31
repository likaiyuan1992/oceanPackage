<template>
  <div class="footer_layout">
    <div class="footer flex flex-jb flex-ac">
      <!-- <div class="logo">
        <img src="../../static/res/index/logo.png">
      </div>
      <div class="qcode">
        <img src="../../static/res/index/qcode.png">
      </div> -->
      <div class="nav ">
        <div class="nav_top ">
          <div class="nav_top_first">
            <p class="title">海外仓服务</p>
            <p>海外换标</p>
            <p>海外中转</p>
            <p>海外代发</p>
            <p>海外仓储</p>
            <p>海外检测</p>
          </div>
          <div class="nav_top_second">
            <p class="title">联系我们</p>
            <p><img class="tel_icon"
                   :src="require('../../static/common/icon/tel.png')"
                   alt="">19926642778</p>
            <p><img class="email_icon"
                   :src="require('../../static/common/icon/email.png')"
                   alt="">78454654874@qq.com</p>
            <p>
              <img class="address_icon"
                   :src="require('../../static/common/icon/address.png')"
                   alt=""> 深圳市龙华街道清华区和平路52号鸿华中心4层
            </p>
          </div>
        </div>
      </div>
      <div class="code_box">
        <p class="contact_code"><img src=""
               alt=""></p>
        <p>扫一扫，微信咨询</p>
      </div>
    </div>
  </div>
</template>

<script>



export default {
  name: 'IndexB',
  components: {
  },
  data() {
    return {}
  }
}
</script>

<style  scoped>
.code_box p {
  text-align: center;
  color: #fff;
}
.footer_layout {
  width: 100%;
  background: #1890ff;
  color: #fff;
}
.footer {
  margin: 0 auto;
  display: flex;
  height: 260px;
  width: 70%;
  color: #f2f5fa;
  flex-direction: row;
  font-size: 12px;
  font-family: SourceHanSans-Light, serif;
  background: #1890ff;
}
.logo {
  margin: 93px 87px 0px 128px;
}
.qcode {
  margin: 55px 124px 0 0;
}
.nav {
  margin-top: 31px;
  display: flex;
  flex-direction: column;
}
.nav_top_first,
.nav_top_second {
  margin-right: 108px;
}
.nav_top {
  font-size: 14px;
  text-align: left;
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
}
.nav_top p {
  cursor: pointer;
  line-height: 20px;
  color: #fff;
}
.title {
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 15px;
}
.nav_bottom {
  text-align: left;
}
.nav_bottom span,
.nav_bottom p {
  color: #fff;
  margin-right: 4px;
}
.contact_code {
  width: 130px;
  height: 130px;
}
.address_icon {
  width: 20px;
  margin-right: 2px;
}
.email_icon,
.tel_icon {
  width: 18px;
  margin-right: 5px;
}
</style>
