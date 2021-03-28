<template>
  <div class="footer_layout">
    <div class="footer">
      <!-- <div class="logo">
        <img src="../../static/res/index/logo.png">
      </div>
      <div class="qcode">
        <img src="../../static/res/index/qcode.png">
      </div> -->
      <div class="nav">
        <div class="nav_top ">
          <div class="nav_top_first">
            <p class="title">脑科学实验室</p>
            <p>脑控产品</p>
            <p>软件系统</p>
            <p>硬件展示</p>
            <p>训练教程</p>
          </div>
          <div class="nav_top_second">
            <p class="title">走进酷成长</p>
            <p>关于我们</p>
            <p>新闻资讯</p>
            <p>市场分析</p>
            <p>加入我们</p>
          </div>
          <div class="nav_top_third">
            <p class="title">客户端下载</p>
          </div>
        </div>
        <div class="nav_bottom flex">
          <p>公司地址：北京市海淀区苏州街18号院长远天地大厦B1座四层3A04室</p>
          <p>公司邮箱：services@cogrowth.net.cn</p>
          <p>联系电话：400-835-0006</p>
          <p>
            <span>北京酷成长科技有限公司</span><span>京ICP备16029003号-4</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexB',
  data () {
    return {}
  }
}
</script>

<style  scoped>
  .footer_layout {
    width: 100%;
    background: #1890ff;
    color:#fff;
  }
  .footer {
    margin: 0 auto;
    display: flex;
    height: 260px;
    width: 54%;
    color: #F2F5FA;
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
  .nav_top_first, .nav_top_second {
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
    color:#fff;
  }
  .title {
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 15px;
  }
  .nav_bottom {
    text-align: left;

  }
  .nav_bottom span,.nav_bottom p{
 color:#fff;
 margin-right:4px;
  }
</style>
