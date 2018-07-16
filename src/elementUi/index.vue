<template>
    <div>
        <el-row class="tac">
            <el-col :span="5">
                <h3>vue听课笔记整理</h3>
                <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen" 
                v-bind:router="true"
                @close="handleClose">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>vue基础</span>
                        </template>
                        <el-menu-item-group>
                            <template slot="title">vue背景介绍</template>
                            <el-menu-item index="/future">前端的未来</el-menu-item>
                            <el-menu-item index="/webFramwork">前端框架</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="环境准备">
                            <el-menu-item index="1-3">VUECli安装</el-menu-item>
                            <el-menu-item index="1-4">webpack安装</el-menu-item>
                            <el-menu-item index="1-5">新建项目</el-menu-item>
                        </el-menu-item-group>
                </el-submenu>
                <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                    <span slot="title">vue基础语法</span>
                </el-menu-item>
                <el-menu-item index="3">
                    <i class="el-icon-document"></i>
                    <span slot="title">双向绑定与过滤器</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <i class="el-icon-setting"></i>
                    <span slot="title">组件化</span>
                </el-menu-item>
                <el-menu-item index="5">
                    <i class="el-icon-setting"></i>
                    <span slot="title">api接口请求</span>
                </el-menu-item>
                <el-menu-item index="6">
                    <i class="el-icon-setting"></i>
                    <span slot="title">echarts在vue中的应用</span>
                </el-menu-item>
                <el-menu-item index="7">
                    <i class="el-icon-setting"></i>
                    <span slot="title">elementUI组件库的应用</span>
                </el-menu-item>
                <el-menu-item index="8">
                    <i class="el-icon-setting"></i>
                    <span slot="title">iviewUI组件库的应用</span>
                </el-menu-item>
                <el-menu-item index="9">
                    <i class="el-icon-setting"></i>
                    <span slot="title">VUX</span>
                </el-menu-item>
                </el-menu>
            </el-col>
            <el-col :span='13'>
                <router-view style="margin-top : 80px;"/>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
  data () {
    return {
      value3: true,
      value4: true
    }
  },
  methods: {
    handleOpen (key, keyPath) {
    //   console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
    //   console.log(key, keyPath)
    }
  }
}
</script>
