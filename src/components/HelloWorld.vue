<template>
  <div class="hello">
    <banner />
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
    </p>
  </div>
</template>

<script>

import api from '../assets/api/indexApi.js'
import banner from './banner'
export default {
  name: 'HelloWorld',
  components: {
    banner
  },
  mounted () {
    api.getComInfo().then(res => {
      console.log(res)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello {
  h3 {
    background: #42b983;
    color: #42b983;
  }
}
</style>
