<template>
<!-- 绘制图表 -->
    <div align='center'>
      <h3>绘制图表</h3>
      <div id="ec" :style="{width: '300px', height: '300px'}"></div>
    </div>
</template>
<script>
export default {
  name: 'echarts',
  data () {
    return {
      msg: 22
    }
  },
  methods: {
    drawLine () {
      var charts = this.$echarts.init(document.getElementById('ec'))
      charts.setOption({
        title: { text: '这是一个测试用的图表' },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      })
    }
  },
  mounted () {
    this.drawLine()
  }
}
</script>
<style>
</style>
