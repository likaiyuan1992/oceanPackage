<template>
  <div class="solve">
    <div class="solve_main">
      <div class="solve_img">
        <!--<img src="../../static/common/images/al_bg.png" alt=""/>-->
        <h1 class="banner_h1 animated fadeInLeft">案例展示</h1>
        <h3 class="banner_h3 animated fadeInLeft">CASE PRESENTATION</h3>
      </div>

      <div class="al_lunbo w1200 animated fadeInRightBig">
        <div
          :autoplay="true"
          :interval="4000"
          type="card"
          height="220px"
        >
          <div>
            <div class="lindong_box">
              <img class="boxl1s" src="../../static/common/images/al/l1.png" alt="">
              <p>北校区的教师们使用水滴智慧设备上美术、建筑等专业课，教学效果特别好。他们的系统能兼容各种专业软件以方便授课、学习使用，并能自动实时录播，回放讲解、作品扫描投屏等等。</p>
              <div class="titleBoxcb">安徽建筑大学：</div>
            </div>
          </div>
          <div>
            <div class="lindong_box">
              <img class="boxl1s" src="../../static/common/images/al/l2.png" alt="">
              <p>白板软件和互动系统的功能非常好用，在线直播课程一点都不卡，方便又高效。老师上课方便，效率提高了，学生的兴趣与学习效果也提升了。</p>
              <div class="titleBoxcb">深圳职业技术学院：</div>
            </div>
          </div>
          <div>
            <div class="lindong_box">
              <img class="boxl1s" src="../../static/common/images/al/l4.jpg" alt="">
              <p>我们医护专业因为有了实训智慧教室设备的辅助，不仅上课效率提高了，而且在一个学期后，学生基本可以无盲点地熟练掌握各种护理技能。</p>
              <div class="titleBoxcb">海南科技职业学院：</div>
            </div>
          </div>
        </div>
      </div>

      <!--资讯-->
      <div class="information">
        <div class="information_box w1200">
          <h2>常态智慧教室解决方案</h2>
          <ul class="showLines">
            <li>
              <img class="showLines_liImg" src="../../static/common/images/al_list/c_1.png" alt="">
              <div class="showLines_liDiv">
                <img class="imgsheed" src="../../static/common/images/al_list/c_11.png" alt="">
                <h6>海南省海口新埠中心小学</h6>
                <p>花费与传统多媒体设备不相上下的成本 建立无尘化无辐射的教学环境，全面保护师生健康，并辅助提高教学效率，丰富教学内容，让学生学习更加积极有效。</p>
              </div>
            </li>
            <li>
              <img class="showLines_liImg" src="../../static/common/images/al_list/c_2.png" alt="">
              <div class="showLines_liDiv">
                <img class="imgsheed" src="../../static/common/images/al_list/c_22.png" alt="">
                <h6>山西省太岳中学</h6>
                <p>从传统教学迈入信息化教学，改善师生教学环境，为教学提质减负。</p>
              </div>
            </li>
            <li>
              <img class="showLines_liImg" src="../../static/common/images/al_list/c_3.png" alt="">
              <div class="showLines_liDiv">
                <img class="imgsheed" src="../../static/common/images/al_list/c_33.png" alt="">
                <h6>合肥市常春藤实验学校</h6>
                <p>花费与传统多媒体设备不相上下的成本，建立无尘化无辐射的教学环境，全面保护师生健康，并辅助提高教学效率，丰富教学内容，让学生学习更加积极有效。</p>
              </div>
            </li>
          </ul>

          <h2>互动智慧教室解决方案</h2>
          <ul class="showLines">
            <li>
              <img class="showLines_liImg" src="../../static/common/images/al_list/h_1.png" alt="">
              <div class="showLines_liDiv">
                <img class="imgsheed" src="../../static/common/images/al_list/h_11.png" alt="">
                <h6>安徽建筑大学</h6>
                <p>在常态教室的基础上，增设校区互动、 智能化数据采集 、 物联网监控、自动直录播等功能，提高南北校区之间的互动频率与各类专业课的课堂效率。</p>
              </div>
            </li>
            <li>
              <img class="showLines_liImg" src="../../static/common/images/al_list/h_2.png" alt="">
              <div class="showLines_liDiv">
                <img class="imgsheed" src="../../static/common/images/al_list/h_22.png" alt="">
                <h6>中国劳动关系学院</h6>
                <p>以现代信息技术代替传统黑板，并加入互动直录播设备，不仅是对课堂环境的优化，更是互动教学的进步。</p>
              </div>
            </li>
            <li>
              <img class="showLines_liImg" src="../../static/common/images/al_list/h_3.png" alt="">
              <div class="showLines_liDiv">
                <img class="imgsheed" src="../../static/common/images/al_list/h_33.png" alt="">
                <h6>湖南师范大学</h6>
                <p>搭建双师互动系统、录播教室等设备，解决教师间的课堂互动交流问题。</p>
              </div>
            </li>
          </ul>

          <h2>实训智慧教室解决方案</h2>
          <ul class="showLines">
            <li>
              <img class="showLines_liImg" src="../../static/common/images/al_list/s_1.png" alt="">
              <div class="showLines_liDiv">
                <img class="imgsheed" src="../../static/common/images/al_list/s_11.png" alt="">
                <h6>海南科技职业学院</h6>
                <p> 针对医护专业的师生打造实训智慧教室，成倍提高教师的师范教学效率，一个学期后，学生均能无盲点熟练掌握各种护理技能。</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="hezuo">
        <h2>合作伙伴</h2>
        <div class="hezuo_box w1200">
          <!--<img src="" alt="">-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Interaction',
  data () {
    return {}
  },
  mounted () {
    // this._jq();
  },
  methods: {

  },
  computed: {
    //      count(){
    //        return this.$store.state.count
    //      },
  }
}
</script>

<style scoped>
  .solve {
    width: 100%;
    height: auto;
    overflow: hidden;
  }
  .solve_main {
    width: 100%;
    height: auto;
    overflow: hidden;
  }
  .solve_img {
    width: 100%;
    height: 532px;
    background: url('../../static/common/images/al_bg.png') center no-repeat;
    position: relative;
    overflow: hidden;
    background-size: cover;
  }
  .solve_img img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
  }
  .banner_h1 {
    font-size: 49px;
    color: #fff;
    margin: 208px 0 0 18%;
    font-weight: normal;
  }
  .banner_h3 {
    font-size: 22px;
    color: #fff;
    margin: 10px 0 0 18%;
    font-weight: normal;
    animation-delay: .5s;
  }
  .al_lunbo {
    height: 380px;
    width: 900px !important;
    background: white;
    padding: 60px;
    box-sizing: border-box;
    animation-delay: .5s;
  }
  .lindong_box {
    width: 95%;
    height: 160px;
    background: #ffffff;
    position: relative;
    margin: 50px auto 0 auto;
    box-shadow: 0px 2px 10px #888888;
    padding: 54px;
    box-sizing: border-box;
  }
  .boxl1s {
    width: 74px;
    height: 74px;
    position: absolute;
    left: 50%;
    top: -37px;
    margin-left: -37px;
  }
  .lindong_box p {
    font-size: 12px;
    color: #4081F4;
  }
  .titleBoxcb{
    width: 180px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    background: #4d4d4d;
    font-size: 14px;
    color: white;
    position: absolute;
    right: -10px;
    bottom: 0;
  }
  .information{
    width: 100%;
    height: auto;
    background: #FBFBFB;
    padding-bottom: 150px;
    overflow: hidden;
  }
  .information_box h2{
    font-size: 30px;
    color: #545454;
    text-align: center;
    margin: 108px auto;
  }
  .information_box ul{
    width: 100%;
    height: 382px;
    display: flex;
    justify-content: center;
    /*background: red;*/
  }
  .information_box ul li{
    width: 266px;
    height: 382px;
    position: relative;
    box-shadow: 0px 2px 10px #888888;
    box-sizing: border-box;
    text-align: center;
    transition: .5s;
  }
  .showLines_liImg{
    width: 100%;
    height: 100%;
    background-size: cover;
    position: absolute;
    left: 0;
    top: 0;
    transition: .3s;
  }
  .information_box ul li:hover{
    transform: scale(1.1);
  }
  .showLines_liDiv{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    /*text-align: center;*/
    padding: 0 31px;
    box-sizing: border-box;
    /*background: red;*/
    /*z-index: 100;*/
  }
  .showLines_liDiv h6{
    font-size: 17px;
    color: white;
    font-weight: normal;
    margin-bottom: 10px;
  }
  .showLines_liDiv p{
    font-size: 12px;
    color: white;
    text-align: left;
  }
  .imgsheed{
    width: 78px;
    height: 78px;
    margin: 82px auto 28px auto ;
  }
  .sdsd{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    margin: 0!important;
    cursor: pointer;
  }
 .hezuo{
   width: 100%;
   height: auto;
   overflow: hidden;
   padding-bottom: 280px;
 }
 .hezuo h2{
   font-size: 30px;
   color: #545454;
   text-align: center;
   margin: 108px auto;
 }
  .hezuo h3{
    font-size: 30px;
    color: #454545;
    text-align: center;
  }
  .hezuo_box{
    height: 691px;
     background: url('../../static/common/images/bg_logo.png') center white no-repeat;
  }
</style>
