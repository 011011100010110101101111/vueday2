<template>
  <div>
    <a @click="changeNavi(0)">首页</a>|
    <a @click="changeNavi(1)">第二页</a>|
    <a @click="changeNavi(2)">第三页</a>
    <navi1 v-if="showNavi == 0"></navi1>
    <navi2 v-if="showNavi == 1"></navi2>
    <navi3 v-if="showNavi == 2"></navi3>
  </div>
</template>

<script>
import navi1 from './navi1.vue'
import navi2 from './navi2.vue'
import navi3 from './navi3.vue'
export default {
  name: 'c1',
  data () {
    return {
      showNavi: ''
    }
  },
  methods: {
    changeNavi (e) {
      this.showNavi = e
    }
  },
  components: {
    navi1, navi2, navi3
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a{
    margin-left: 10px;
    margin-right: 10px;
  }
</style>
