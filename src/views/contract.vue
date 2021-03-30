<template>
  <div class="wrapper">
    <div id="contactsBodyer">
      <h2>选择马丁 选择品质</h2>
      <div class="contactsMsg">
        <div>
          <img
            :src="contactWay.siteImg"
            alt="马丁海外仓"
          >
        </div>
        <ul>
          <li>
            <a v-text="contactWay.contactWay" />
          </li>
          <li>
            <a v-text="contactWay.email" />
          </li>
          <li>
            <a v-text="contactWay.address" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../assets/api/indexApi.js'
export default {
  data () {
    return {
      contactWay: {}
    }
  },
  created () {
    this.getContactData()
  },
  methods: {
    getContactData () {
      api.getContacts().then(res => {
        this.contactWay = res
      })
    }
  }
}
</script>
<style lang="less" scoped>
.wrapper {
  #contactsBodyer {
    width: 1200px;
    margin: 90px auto 130px;
    overflow: hidden;
    h2 {
      margin: 10px auto 30px;
      text-align: center;
      color: #3b3c3f;
      font-size: 1.8em;
    }
    .contactsMsg {
      div {
        // width: 400px;
        // height: 300px;
        float: left;
        margin: 40px;
        img {
          width: 400px;
          height: 300px;
        }
      }
      ul {
        display: block;
        width: 700px;
        height: 230px;
        float: right;
        margin: 40px auto;
        line-height: 40px;
        font-size: 1.2em;
        padding-top: 70px;
        li {
          i {
            font-size: 1.5em;
            margin-right: 20px;
          }
          a {
            color: #000000;
          }
        }
      }
    }
  }
  @media screen and (max-width: 1200px) {
    #contactsBodyer {
      margin: 40px auto 10px;
      width: 100%;
      .contactsMsg {
        div {
          width: 93%;
          height: auto;
          margin: 20px auto;
          float: none;
          img {
            width: 100%;
            height: auto;
          }
        }
        ul {
          width: 90%;
          float: none;
          margin: 20px auto;
          padding-top: 0;
        }
      }
    }
  }
}
</style>
