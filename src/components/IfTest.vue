<template>
  <div class="news">
    <ul>
      <li v-if="item1">打掃房間</li>
      <li v-else-if="item2">上網學習vue</li>
      <li v-else-if="item3">到便利商店領包裹</li>
      <li v-else>今天待辦事項都完成了！</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'news',
  data () {
    return {
      item1: false,
      item2: false,
      item3: false
    }
  }
}
</script>
<style scoped>
</style>
