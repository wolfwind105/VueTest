<template>
  <watch>
    <div id='app'>
      <h1>鐵人30抽獎活動</h1>
      <input type='text' v-model.trim.lazy='myname' />
      <p>抽獎人 {{ myname }}</p>
    </div>
  </watch>
</template>

<script>
export default {
  data () {
    return {
      myName: '姓名',
      mail: '電子信箱'
    }
  },
  watch: {
    myName: {
      handler () {
        alert('請輸入真實姓名')
      },
      immediate: true
    }
  }
}
</script>
<style>
</style>
