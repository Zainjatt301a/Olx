// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, setDoc, doc, getDocs, getDoc } from "firebase/firestore"

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

// import { useState } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCMkyHjo2c8xl9mHvh7wI4o1eyGFxhSoTY",
    authDomain: "fir-de3d2.firebaseapp.com",
    projectId: "fir-de3d2",
    storageBucket: "fir-de3d2.appspot.com",
    messagingSenderId: "407842355153",
    appId: "1:407842355153:web:3f4fe6c649aa8867f952f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();



const register = (email, password, name, uid) => {

    createUserWithEmailAndPassword(auth, email, password)

        .then((userCredential) => {
            // Signed in 
            // const [id, setId] = useState()

            const uid = userCredential.user.uid;
            // setId(uid)
            // ...
            alert("Successfully Registered")
            // addDoc(collection(db, "users"), {
            //     name,
            //     email,
            //     password
            // }).then(() => {
            //     alert("Added Successfully")
            // }).catch(() => {
            //     alert("Not Added")
            // })
            setDoc(doc(db, "users", uid), {
                name,
                email,
                password
            }).then(() => {
                alert("Added Successfully")
            }).catch(() => {
                alert("Not Added")
            })

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            alert(errorMessage)
        });
}

const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

            // Signed in 
            const user = userCredential.user;
            // ...
            alert("Successfully Logged In")

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
        });
}

const sellData = (title, description, category, price, id) => {

    addDoc(collection(db, "Products"), {
        title,
        description,
        category,
        price
    }).then(() => {
        alert("Added Successfully")
    }).catch(() => {
        alert("Not Added")
    })
    // setDoc(doc(db, "Products", id), {
    //     title,
    //     description,
    //     category,
    //     price
    // }).then(() => {
    //     alert("Added Successfully")
    // }).catch(() => {
    //     alert("Not Added")
    // })
}

const GetAdd = async () => {

    const data = await getDocs(collection(db, "Products"));
    const ads = []
    data.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        ads.push({ ...doc.data(), id: doc.id })

    })
    return ads
}

const getAddDetails = async (paramState) => {
    const docRef = doc(db, "Products", paramState);
    const docSnap = await getDoc(docRef);



    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());

    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }



    return docSnap.data()


}



export {
    register,
    login,
    sellData,
    GetAdd,
    getAddDetails

}