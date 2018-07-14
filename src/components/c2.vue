<template>
  <div>
    <h3>{{msg}}</h3>
  </div>
</template>

<script>
import Public from './public.vue'
export default {
  name: 'c2',
  props: ['tip'],
  data () {
    return {
      msg: ''
    }
  },
  methods: {
  },
  mounted () {
    let vm = this
    Public.$on('clk', (data) => {
      vm.msg = data
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
