<template>
  <div>
    {{msg}}
    <c1></c1>
    <c2></c2>
  </div>
</template>

<script>
import c1 from './c1.vue'
import c2 from './c2.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '这是一个首页'
    }
  },
  components: {
    'c1': c1,
    'c2': c2
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
