<script setup></script>

<template>
  <main>
    <h1>Home page Test</h1>
    <h3 style="color: red">{{ time }}</h3>
  </main>
</template>

<script setup>
import { ref } from 'vue'

const time = ref('')

function updateTimer() {
  // 获取当前时间并加上 12 小时
  const now = new Date()
  const futureTime = new Date(now.getTime() + 12 * 60 * 60 * 1000)

  // 格式化时间
  const hours = String(futureTime.getHours()).padStart(2, '0')
  const minutes = String(futureTime.getMinutes()).padStart(2, '0')
  const seconds = String(futureTime.getSeconds()).padStart(2, '0')

  // 显示时间
  time.value = `${hours}:${minutes}:${seconds}`
}

// 每秒更新一次
setInterval(updateTimer, 1000)

// 初始化显示
updateTimer()
</script>
