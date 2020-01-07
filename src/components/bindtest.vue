<template>
  <div class="news">
   <div :class="[div_style, coloring, { round :shape  }]"></div>
  </div>
</template>

<script>
export default {
  name: 'news',
  data () {
    return {
      div_style: 'box',
      coloring: '顏色',
      shape: true
    }
  }
}
</script>

<style scoped>
  .box {
    border: 1px solid #cccccc;
    width: 100px;
    height: 100px;
  }
  .顏色 {
    background-color: red;
    margin: 0 auto;
  }
  .round {
    border-radius: 50%;
  }
</style>
