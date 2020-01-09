<template>
  <div id='qwe'>
    <h1>父層藏好料</h1>
    <child @hungry='hungry' :dinner='dinner' />
  </div>
</template>

<script>
import child from './components/child'
export default {
  components: {
    child
  },
  data () {
    return {
      dinner: []
    }
  },
  methods: {
    hungry () {
      alert('你的晚餐來了！')
      return (this.dinner = ['漢堡', '薯條', '炸雞', '可樂'])
    }
  }
}
</script>

<style>
#qwe {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  flex-direction: column;
  -webkit-align-items: center;
  align-items: center;
  margin: 0 auto;
}
</style>
