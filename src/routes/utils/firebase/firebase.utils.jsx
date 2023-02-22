import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, EmailAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBfMAhxIMsGOxPtE5WgNpYBW4Bv0aFRyj8",
    authDomain: "crwn-clothing-db-54c05.firebaseapp.com",
    projectId: "crwn-clothing-db-54c05",
    storageBucket: "crwn-clothing-db-54c05.appspot.com",
    messagingSenderId: "335158141411",
    appId: "1:335158141411:web:12afff9c2cd3dacf15c0d6"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    promt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocref = doc(db, 'users', userAuth.uid);
    console.log(userDocref);

    const userSnapshot = await getDoc(userDocref);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocref, {
                displayName,
                email,
                createdAt
            });
        } catch (error) {
            console.log('error creating the users', error.message);
        };
    };

    return userDocref;
};

