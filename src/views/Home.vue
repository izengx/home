<template>
  <div class="home">
    <h3>IZENGX</h3>
    <h1 class="date">{{ state.date }}</h1>
    <h1 class="time">{{ state.time }}</h1>
    <div class="calendar">
      <el-calendar v-model="state.fullTime" />
    </div>
  </div>
</template>

<script lang="ts" setup>

import { defineComponent, onMounted, reactive, toRefs, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { ElMessage, ElForm } from 'element-plus'
import moment from 'moment'


interface StateType{
  fullTime: any,
  date: any,
  time: any
}

const state = reactive<StateType>({
  fullTime: new Date(),
  date: moment(new Date()).format('YYYY-MM-DD'),
  time: moment(new Date()).format('HH:mm:ss')
})

const rangeTime = () => {
  setInterval(() => {
    state.fullTime = new Date()
    state.date = moment(new Date()).format('YYYY-MM-DD')
    state.time = moment(new Date()).format('HH:mm:ss')
  }, 1000)
}

rangeTime()

</script>

<style lang="scss">
.home {
  text-align: center;
}
.date {
  font-size: 50px;
}
.time {
  font-size: 80px;
}
// .calendar {
//   height: 200px;
// }
// ::v-deep .el-calendar-table .el-calendar-day{
//   height: 20px;
// }
</style>
