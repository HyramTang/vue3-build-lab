<script setup>
import { sayHello } from '../../public/hello'

const onClick = sayHello
</script>

<template>
  <main>
    <h1>Home page</h1>
    <button type="button" @click="onClick">点击</button>
  </main>
</template>
