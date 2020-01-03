<template>
  <slot-card>
    <div class="card">
      <div class="card_title">
        <h1>Slot範例</h1>
      </div>
      <div class="card_body">
        <p>Slot內容要從本段文字下開始</p>
        <slot></slot>
        <p>Slot內容要從本段文字上結束</p>
      </div>
    </div>
  </slot-card>
</template>

<script>
export default {
}
</script>

<style scoped>
.card {
  width: 600px;
  margin: 0 auto;
  background: white;
  border: 1px solid #cccccc;
  border-radius: 6px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);

}
.card_title {
  padding: 16px;
  border-bottom: 1px solid #cccccc;
  color: black;
  font-size: 20px;
  line-height: 26px;
  font-weight: bold;
}
.card_body {
  padding: 16px;
  color: #555555;
  font-size: 16px;
  line-height: 22px;
}
</style>
