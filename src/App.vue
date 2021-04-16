<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  mounted() {
    this.api.setPv().then(res => { console.log(res) })
  }
}
</script>

<style lang="scss" scoped>
</style>
