<template>
  <div class="about">
    <h1>This is an about page</h1>
    <SlotCard>
      <div class="content">
          <h2 id="app">asdasdasdasdsa</h2>
      </div>
    </SlotCard>
  </div>
</template>

<script>
import SlotCard from './SlotCard'

export default {
  name: 'about',
  components: {
    SlotCard
  }
}
</script>

<style>
.content {
  padding: 50px 20px;
  border-radius: 6px;
  background: #a7daed;
  color: #233447;
}
</style>
