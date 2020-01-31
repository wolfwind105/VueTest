<template>
  <header>
    <div id="app">
      <div id="nav">
        <router-link to="/">Homes</router-link>|
        <router-link to="/about">About</router-link>
        <router-link to="/news">news</router-link>
        <router-link to="/test">test</router-link>
        <router-link to="/ittest">ittest</router-link>
        <router-link to="/VonWatch">VonWatch</router-link>
        <router-link to="/Von">Von</router-link>
        <router-link to="/Watch">Watch</router-link>
        <router-link to="/Filter">Filter</router-link>
        <router-link to="/father">father</router-link>
        <router-link to="/DataDriven">DataDriven</router-link>
        <router-link to="/Practice">Practice</router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  background: #444;
  padding: 14px 0;
  margin-bottom: 40px;
}
.router-link-active {
  background: #eee;
  color: #444;
}
a {
  color: #fff;
  text-decoration: none;
  padding: 6px 8px;
  border-radius: 10px;
}
</style>
