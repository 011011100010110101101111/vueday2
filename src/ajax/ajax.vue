// ajax 方式请求接口
<template>
    <div>
        <button @click="aj">点我</button>
        <p>{{msg}}</p>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    aj () {
      axios.get('http://rttop.cn/api/?day=1-1').then(res => {
        this.msg = res.data
      })
    }
  }
}
</script>
