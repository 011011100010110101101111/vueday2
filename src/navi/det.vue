<template>
  <div>
    <!--改变属性-->
    <p v-fs="{fs: '15px', color: 'red'}"> 明天天气会更好</p>
    <!--自动获取焦点-->
    <input v-fo>
  </div>
</template>
<script>
export default {
  name: 'det',
  data () {
    return {

    }
  },
  methods: {
  },
  components: {
  },
  directives: {
    'fs': {
      bind (el, bingding) {
        el.style.fontSize = bingding.value.fs
        el.style.color = bingding.value.color
      }
    },
    'fo': {
      inserted (el) {
        el.focus()
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
