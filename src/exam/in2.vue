<template>
    <div>
        <ul>
        <li v-for="item in list" :key="item.id">{{item.name}}&nbsp;&nbsp;&nbsp;&nbsp;<a @click="del(item.id)">删除</a></li>
    </ul>
    <input type="text" v-model='newL'>
    <button @click="add">新增</button>
    </div>
</template>
<script>
export default {
  data () {
    return {
      list: [
        {id: 0, name: '李白'},
        {id: 1, name: '杜甫'},
        {id: 2, name: '章三'},
        {id: 3, name: '李四'}
      ],
      newL: ''
    }
  },
  methods: {
    del (id) {
      this.list.splice(id, id)
    },
    add () {
        this.list.push(
            {id: this.list.length+1, name: this.newL}
        )
    }
  }
}
</script>
