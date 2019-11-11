import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

/* FILL OUT CONFIG META-DATA */
const firebaseConfig = {
	apiKey: '',
	authDomain: '',
	databaseURL: '',
	projectId: '',
	storageBucket: '',
	messagingSenderId: '',
	appId: '',
}

export const createUserProfileDocument = async (userAuth, additonalData) => {
	if (!userAuth) return

	// get reference/snapshot of user document from firestore database
	const userRef = firestore.doc(`users/${userAuth.uid}`)
	const snapShot = await userRef.get()

	// if user doesn't already exist in firestore db, add them/create snapshot
	if (!snapShot.exists) {
		const { displayName, email, photoURL } = userAuth
		const createdAt = new Date()

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				photoURL,
				...additonalData,
			})
		} catch (error) {
			console.log('error creating user', error.message)
		}
	}

	return userRef
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
