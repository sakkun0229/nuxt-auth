<template>
  <div class="flex-center">
    <div class="centered">
      <div>
        <h1 class="title">nuxt-firebase-auth</h1>
        <form>
          <div class="form-input">
            <input v-model="email" type="email" placeholder="email" />
          </div>
          <div class="form-input">
            <input v-model="password" type="password" placeholder="password" />
          </div>
          <div class="buttons">
            <button @click.prevent="signUp" class="button">sign up</button>
            <span>or</span>
            <button @click.prevent="logIn" class="button">log in</button>
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
      email: 'test@test.com',
      password: 'hogehoge'
    }
  },
  methods: {
    signUp() {
      console.log('sign up')
    },
    logIn() {
      console.log('log in')
    }
  }
}
</script>

<style lang="scss" scoped>
.flex-center {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.centered {
  // background-color: wheat;
  width: 100%;
  padding: 0 10px;
}

form {
  max-width: 450px;
  margin: 20px auto;
  padding: 24px 4px;
  border: 1px solid #ccc;
  border-radius: 8px;
}
.form-input {
  margin: 15px auto;
  input {
    width: 90%;
    max-width: 300px;
  }
}
</style>
