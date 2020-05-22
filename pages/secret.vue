<template>
  <h1>this is secret page!</h1>
</template>

<script>
import firebase from '~/plugins/firebase'

export default {
  beforeCreate() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log(user)
      } else {
        console.log('user not found')
        location.href = '/'
      }
    })
  }
}
</script>

<style></style>
