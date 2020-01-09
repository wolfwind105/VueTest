<template>
  <div id="child">
    <h3>子層伸手要</h3>
    <button @click="$emit('hungry')">好餓喔！！</button>
    <ul>
      <li v-for="item in dinner" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    dinner: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
#child {
  padding: 20px;
  border: 1px solid #cccccc;
  width: 500px;
  margin: 0 auto;

}
button {
  margin-bottom: 15px;
}
ul {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-justify-content: center;
  justify-content: center;
  padding: 0;
  margin: 0;
}
li {
  display: inline-block;
  margin: 10px;
}
</style>
