<template>
  <btn-Msg>
    <div>
      <h1>{{ msg }}</h1>
      <button @click='helpMe'>{{ btnMsg }}</button>
    </div>
  </btn-Msg>
</template>

<script>
export default {
  name: 'HelpBtn',
  props: {
    msg: {
      type: String,
      default: 'msg'
    },
    btnMsg: {
      type: String,
      default: 'btnMsg'
    }
  },
  methods: {
    helpMe () {
      this.msg = this.btnMsg
    }
  }
}
</script>
