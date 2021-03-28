<template>
  <div class="home">
    <Banner />
    <p class="cont_p"><span>核心业务</span>CORE BUSINESS</p>
    <p class="cont_p">阿甘海外仓布局美国、英国、德国 、法国、意大利、西班牙、日本、 加拿大，致力打造您的海外办事处。</p>
    <ul class="flex list_ul flex-jb">
      <li class="text-ct" v-for="litem in listData" :key="litem.id">
        <p><img :src="litem.imgUrl" alt=""></p>
        <p class="list_cent">{{ litem.title }}</p>
        <p>{{ litem.content }}</p>
      </li>
    </ul>
    <div class="about_us">
      <p class="cont_p"><span>关于我们</span>ABOUT US</p>
      <div class="flex about_t flex-ac">
        <p class="flex1 flex flex-ac"><img src="//17536101.s21i.faiusr.com/4/ABUIABAEGAAg8OOS3QUotM_x8AYwrAI4Zw.png.webp" alt=""></p>
        <p class="flex1 cont_r">
          阿甘海外仓，致力为广大跨境卖家朋友提供细致、全面的海外落地服务。公司成立之初就重金打造自有海外仓库，全华人管理，力求灵活、经济与高效。团队同仁经验丰富，集结于跨境圈多个服务行业，可为卖家朋友提供个性化的服务方案。
          阿甘有幸与您结识，愿我们携手共建，您的海外办事处！
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
        imgUrl: '//12452007.s61i.faiusr.com/4/AD0Ip4H4BRAEGAAgzo6XwwUonvTLjAUwMDgx.png.webp',
        title: '退货换标',
        content: '亚马逊退货换标转运改善问题库存',
        id: 1
      }, {
        imgUrl: '//12452007.s61i.faiusr.com/4/AD0Ip4H4BRAEGAAgzo6XwwUonvTLjAUwMDgx.png.webp',
        title: '退货换标',
        content: '亚马逊退货换标转运改善问题库存',
        id: 2
      }, {
        imgUrl: '//12452007.s61i.faiusr.com/4/AD0Ip4H4BRAEGAAgzo6XwwUonvTLjAUwMDgx.png.webp',
        title: '退货换标',
        content: '亚马逊退货换标转运改善问题库存',
        id: 3
      }, {
        imgUrl: '//12452007.s61i.faiusr.com/4/AD0Ip4H4BRAEGAAgzo6XwwUonvTLjAUwMDgx.png.webp',
        title: '退货换标',
        content: '亚马逊退货换标转运改善问题库存',
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
  p{
    width: 60%
  }
  .list_cent{
    color: rgba(246, 124, 1, 1);
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
</style>
