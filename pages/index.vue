<template>
  <div class="container">
    <div class="centered">
      <div>
        <h1 class="title">nuxt-firebase-auth</h1>
        <form>
          <div class="form-input">
            <input v-model="email" type="email" placeholder="email" />
          </div>
          <div class="form-input">
            <input type="password" placeholder="password" />
          </div>
          <div class="buttons">
            <button class="button">sign up</button>
            <button class="button">log in</button>
          </div>
        </form>

        <div class="links">
          <nuxt-link to="secret" class="button--green">secret page</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase'

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.centered {
  background-color: wheat;
  width: 100%;
}

form {
  max-width: 450px;
  margin: 20px auto;
  // max-width: 450px;
  background-color: aquamarine;
}
.form-input {
  margin: 15px auto;
  input {
    width: 90%;
    max-width: 300px;
  }
}
</style>
