<template>
    <div>
        <input type="text" v-model="msg">
        <div>
            <p>{{ msg }}</p>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      msg: ''
    }
  }
}
</script>
