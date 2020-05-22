<template>
  <h1>this is secret page!</h1>
</template>

<script>
import checkUser from '@/middleware/checkUser'

export default {
  middleware: 'checkUser'
}
</script>

<style></style>
