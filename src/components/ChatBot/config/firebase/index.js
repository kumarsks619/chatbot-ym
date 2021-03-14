import firebase from 'firebase'

const firebaseConfig = {
    // Paste your API key here
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

export default db
