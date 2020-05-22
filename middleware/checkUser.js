import firebase from '@/plugins/firebase'

export default ({ context, redirect }) => {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      console.log(user)
    } else {
      alert('you are not logged in...')
      return redirect('/')
    }
  })
}
