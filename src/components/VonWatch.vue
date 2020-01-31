<template>
  <div class="news">
    <h1>小隊搶答積分賽！</h1>
    <ul>
      <li>
        <h3>紅隊</h3>
        <button v-on:click.once="counter += 1">加1分</button>
        <!--once只能觸發一次-->
        <p>總分 {{ counter }}</p>
      </li>
      <li>
        <h3>藍隊</h3>
        <button v-on:click="counter1 += 1">加1分</button>
        <p>總分 {{ counter1 }}</p>
      </li>
      <li>
        <h3>黃隊</h3>
        <button v-on:click="counter2 += 1">加1分</button>
        <p>總分 {{ counter2 }}</p>
      </li>
      <li>
        <h3>最終結算</h3>
        <p>總分 {{ sumtest }}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'button',
  data () {
    return {
      counter: 0,
      counter1: 0,
      counter2: 0
    }
  },
  /*
  watch: {
    counter () {
      console.log(this)
      this.sumCount()
    },
    counter1 () {
      this.sumCount()
    },
    counter2 () {
      this.sumCount()
    }
  },
  */
  computed: {
    sumtest () {
      console.log(this)
      return this.counter + this.counter1 + this.counter2
    }
  }
}
</script>

<style></style>
