
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <hr>
      <help-btn :msg="'我們是勇敢的步兵隊'" :btnMsg="'救救我啊'" />
    <hr>
      <help-btn  :msg="'大步向前又滿腔熱血的敢死隊'" :btnMsg="'哇啊啊啊啊啊啊'" />
      <hr>
  </div>
</template>

<script>
import helpBtn from './components/btnMsg'

export default {
  name: 'home',
  components: {
    helpBtn
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.photo {
  height: 300px;
  width: 400px;
}
</style>
