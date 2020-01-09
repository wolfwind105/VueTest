<template>
  <div id='app'>
    <div>空汙指數 {{ airPollution | filterData | releaseTime(saveDate) }}</div>
  </div>
</template>

<script>
import * as dayjs from 'dayjs'
export default {
  data () {
    const saveDate = dayjs().format('YYYY-MM-DD HH:mm:ss')
    return {
      airPollution: 152,
      saveDate: saveDate
    }
  },
  filters: {
    filterData (airPollution) {
      return 'AQI：' + airPollution + ' / 時間：'
    },
    releaseTime (saveDate, airPollution) {
      return saveDate + airPollution
    }
  }
}
</script>
