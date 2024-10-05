<script setup>
import { useTitle, useFavicon } from '@vueuse/core'

const title = useTitle()
const icon = useFavicon()

const onChangeTitle = () => (title.value = 'Home Page')
const onChangeFavicon = () => {
  icon.value = icon.value?.indexOf('vite') >= 0 ? 'favicon.ico' : 'vite.svg'
}
</script>

<template>
  <main>
    <h1>Home page</h1>
    <label>HTML Title</label>：<input type="text" name="title" v-model="title" />
    <br />
    <button type="button" @click="onChangeTitle">改变标题</button>
    <br />
    <br />
    <button type="button" @click="onChangeFavicon">改变图标</button>
  </main>
</template>
