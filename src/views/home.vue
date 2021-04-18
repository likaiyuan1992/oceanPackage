<template>
  <div class="home">
    <Banner />
    <p class="cont_p"><span>核心业务</span>CORE BUSINESS</p>
    <p class="cont_p">马丁海外仓布局美国，日本，意大利，西班牙，将为您的货物保驾护航。</p>
    <ul class="flex list_ul flex-jb">
      <li class="text-ct" v-for="litem in listData" :key="litem.id">
       
        <p class="list_cent" ><span>{{ litem.title }}</span></p>
        <p class="title">{{ litem.title }}</p>
        <p>{{ litem.content }}</p>
      </li>
    </ul>
    <div class="about_us">
      <p class="cont_p"><span>我们的优势</span>ABOUT US</p>
      <div class="flex about_t flex-ac">
        <p class="flex1 flex flex-ac"><img :src="require('../../static/common/images/logo_big.png')"></p>
        <p class="flex1 cont_r">
         退货换标：马丁海外仓退货换标全面升级，已经单独设立新泽西换标仓，操作速度极大提升，2000件以内换标，一般1至2天即可打包发走，并且可以享受长达40天的免租期。<br/>
         一件代发：一件代发货服务免30天仓租,单量稳定的情况下可协商延长至免租三个月甚至永久免租。国内发来入仓的货可在2个工作日内入库，强大的WMS管理系统和优秀的团队实现了库存、订单状态实时同步，同时让海外仓代发变得如此简单。
        </p>
        
      </div>
      <ul class="about_b flex-jb  flex flex-wp">
        <li class="flex flex-wp" v-for="aItem in aboutData" :key="aItem.id">
          <p><img :src="aItem.imgUrl" alt=""></p>
          <div>
            <p>{{ aItem.title }}</p>
            <p>{{ aItem.content }}</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="work_nes">
      <p class="cont_p"><span>行业动态</span> LASTEST NEWS</p>
      <div class="info_bane flex flex-dc flex-ac  flex-jc">
        <img src="//12452007.s61i.faiusr.com/2/AD0Ip4H4BRACGAAg8v_WwwUo-qHu_QMwwAc40QE.jpg.webp" alt="">
        <p class="title">阿甘海外仓  您的海外办事处</p>
        <p>通过我们专业的服务和性价比超高的服务，我们已经积累了上千家满意的中小企业客户。高达99%以上的客户满意率也让我们更自信，更坚定进一歩对高品质的追求。</p>
      </div>
    </div>
    <ul class="about_face flex-jb  flex flex-wp">
      <li class="flex flex-wp" v-for="aItem in faseData" :key="aItem.id">
        <p class="img_p"><img :src="aItem.imgUrl" alt=""></p>
        <div class="flex1">
          <p>{{ aItem.title }}</p>
          <p>{{ aItem.content }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

import Banner from '../components/banner.vue'
export default {
  components: {
    Banner
  },
  data () {
    return {
      listData: [{

        title: '移仓换标',
        content: '为亚马逊卖家提供专属服务:贴标，换标，换包装，发回FBA',
        id: 1
      }, {
        title: '一件代发',
        content: '一件代发服务，由海外仓直接派送至买家手中',
        id: 2
      }, {
        title: '中转服务',
        content: '货物暂存海外仓，需要时补货进FBA',
        id: 3
      }, {
        title: '产品检测',
        content: '将亚马逊不可售退货，检测出好的产品整理出来，翻新上架FBA继续销售。',
        id: 4
      }],
      aboutData: [{
        imgUrl: '//17536101.s21i.faiusr.com/2/ABUIABACGAAgpvWL3QUojoKlSDDQAjiyAQ.jpg.webp',
        title: '公司理念',
        content: '阿甘海外仓致力打造客户的海外办事处，让跨境卖家在海外有爱的港湾，为您的跨境业务保驾护航，始终抱着双赢的思维来做事，用心创造结果。用价值说话',
        id: 1
      }, {
        imgUrl: '//17536101.s21i.faiusr.com/2/ABUIABACGAAgpvWL3QUojoKlSDDQAjiyAQ.jpg.webp',
        title: '公司理念',
        content: '阿甘海外仓致力打造客户的海外办事处，让跨境卖家在海外有爱的港湾，为您的跨境业务保驾护航，始终抱着双赢的思维来做事，用心创造结果。用价值说话',
        id: 2
      }, {
        imgUrl: '//17536101.s21i.faiusr.com/2/ABUIABACGAAgpvWL3QUojoKlSDDQAjiyAQ.jpg.webp',
        title: '公司理念',
        content: '阿甘海外仓致力打造客户的海外办事处，让跨境卖家在海外有爱的港湾，为您的跨境业务保驾护航，始终抱着双赢的思维来做事，用心创造结果。用价值说话',
        id: 3
      }],
      faseData: [{
        imgUrl: '//17536101.s21i.faiusr.com/2/ABUIABACGAAgvPKL3QUo0O3roQUwygU4wwM!400x400.jpg',
        title: '亚马逊10月新政：FBA选择分仓还是合仓',
        content: '都说使用亚马逊FBA好处多，优势大！然而，2018年亚马逊FBA不断调整和推出新政策，让不少卖家有些慌了神！从2月',
        id: 1
      }, {
        imgUrl: '//17536101.s21i.faiusr.com/2/ABUIABACGAAgvPKL3QUo0O3roQUwygU4wwM!400x400.jpg',
        title: '亚马逊10月新政：FBA选择分仓还是合仓',
        content: '都说使用亚马逊FBA好处多，优势大！然而，2018年亚马逊FBA不断调整和推出新政策，让不少卖家有些慌了神！从2月',
        id: 2
      }, {
        imgUrl: '//17536101.s21i.faiusr.com/2/ABUIABACGAAgvPKL3QUo0O3roQUwygU4wwM!400x400.jpg',
        title: '亚马逊10月新政：FBA选择分仓还是合仓',
        content: '都说使用亚马逊FBA好处多，优势大！然而，2018年亚马逊FBA不断调整和推出新政策，让不少卖家有些慌了神！从2月',
        id: 3
      }, {
        imgUrl: '//17536101.s21i.faiusr.com/2/ABUIABACGAAgvPKL3QUo0O3roQUwygU4wwM!400x400.jpg',
        title: '亚马逊10月新政：FBA选择分仓还是合仓',
        content: '都说使用亚马逊FBA好处多，优势大！然而，2018年亚马逊FBA不断调整和推出新政策，让不少卖家有些慌了神！从2月',
        id: 4
      }]
    }
  }
}
</script>

<style lang='scss' scoped>
.cont_p{
  margin-top:20px;
  span{
    margin-right:15px;
    color: rgb(255, 101, 55);
    font-size: 18px;
  }
}
.list_ul{
  margin-top:60px;
  p.title{font-size: 16px;}
  li{
    width:22%;
  }
  .list_cent{
    
    font-size: 16px;;
  }
}
.about_t{

  p{height:100%;img{width:100%}}
  .cont_r{
    background-color: rgba(0,0,0,.6);
    box-sizing: border-box;
    padding:40px;
    color:#fff;
    line-height: 28px;
    letter-spacing: 2px;
    text-align: justify;
    text-indent: 2em;
  }
}
.about_b{
  margin-top:60px;
  li{
    width: 25%;
    p{
overflow: hidden;
    }

    &:hover{
      img{
        transform: scale(1.2);
      }
    }
    img{
      transition: all linear .4s;
    }
  }
}
.info_bane{
  &:hover{
    img{
      transform: scale(1.2);
    }
  }
  overflow: hidden;
  height:210px;
  text-align: center;
  position:relative;
  p{
    z-index: 666;
    position: relative;
    color:#fff;
    width: 70%;
  }
  .title{
    font-size: 18px;
  }
  img{
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index: 55;
    transition: all linear.6s;
  }
}
.about_face{
  margin: 60px 0 20px 0;
  li{
    width:50%;
    box-sizing: border-box;
    padding-right:60px;
    margin-bottom: 20px;
    .img_p{
      width:140px;
      margin: 0;
      margin-right: 10px;
      img{
        width: 100%;

      }
    }
  }
}
.list_ul li:first-child .list_cent{
background: #ED7D31;
&::after{
    border-right: 40px solid #ED7D31;
}
}
.list_ul li:nth-child(2) .list_cent{
background: #D17B5C;
&::after{
    border-right: 40px solid #D17B5C;
}
}
.list_ul li:nth-child(3) .list_cent{
background: #B98982;
&::after{
    border-right: 40px solid #B98982;
}
}
.list_ul li:nth-child(4) .list_cent{
background: #A5A5A5;
&::after{
    border-right: 40px solid #A5A5A5;
}
}
.list_cent{
  height: 80px;
  line-height: 80px;
  position: relative;


  span{
    color:#fff;
    font-size: 26px;
    margin-left:40px;
  }
  &::after{
  content: "";
  position:absolute;
  right:-80px;
  top:0;
  transform: rotate(180deg);
  border-top: 40px solid transparent;

  border-bottom: 40px solid transparent;
  border-left: 40px solid transparent;
  }
  &::before{
  content: "";
  position:absolute;
left:0;
  top:0;
  transform: rotate(180deg);
  border-top: 40px solid transparent;
  border-right: 40px solid #fff;
  border-bottom: 40px solid transparent;
  border-left: 40px solid transparent;
  }
}
</style>
