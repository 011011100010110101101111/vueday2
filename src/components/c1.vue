<template>
  <div>
    <button @click="clk">点我就传值</button>
  </div>
</template>

<script>
import Public from './public.vue'
export default {
  name: 'c1',
  data () {
    return {
      tip: '今天天气非常热'
    }
  },
  methods: {
    clk (e) {
      Public.$emit('clk', this.tip)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
