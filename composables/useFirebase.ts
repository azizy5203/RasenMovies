
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

export const createUser = async (email, password) => {
    const auth = getAuth();
    const credentials = await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user
            return user
            // ...
        })
        .catch((error) => {
            const errorCode = error.code
            const errorMessage = error.message
        })
    return credentials
}


export const signInUser = async (email, password) => {
    const auth = getAuth()
    const credentials = await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user
            // ...
            return user
        })
        .catch((error) => {
            const errorCode = error.code
            const errorMessage = error.message
            return errorMessage
        })
    return credentials
}

export const initUser = async () => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid
            console.log('user:', user)
        } else {

        }
    })
}

export const signOutUser = async()=>{
    const auth = getAuth();
    const res = await auth.signOut()
    console.log('res:', res)
    return res
}




