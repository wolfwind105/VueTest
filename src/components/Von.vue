<template>
  <div>
    <input type='text' value='先點我再按下 Ctrl + a' @keyup.a='pop' />  <!-- 命名a為觸發事件 -->
    <button @click.left="pop">按我</button> <!-- 命名滑鼠左鍵為觸發事件 -->
    <button @click.left.exact="pop">按我exact</button> <!-- 命名滑鼠左鍵為觸發事件 -->
    <button @click.exact="pop">單獨exact</button> <!-- 限制不能按下任何「系統修飾鍵」。  ctrl alt shift meta  -->
  </div>
</template>

<script>
export default {
  methods: {
    pop () {
      alert('完成按下 Ctrl + a 鍵')
    }
  }
}
</script>
