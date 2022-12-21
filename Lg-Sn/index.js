const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBcEA5xOGrNnXIDmT19WUUpiM0cIrbFIpY",
    authDomain: "fir-basics-bffed.firebaseapp.com",
    projectId: "fir-basics-bffed",
    storageBucket: "fir-basics-bffed.appspot.com",
    messagingSenderId: "503740130303",
    appId: "1:503740130303:web:57750e24dcb76bae4d3dca",
    measurementId: "G-HYTC9QLR9Y"
});


const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

function register(){
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    auth.createUserWithEmailAndPassword(email, password)
    .then((res) => {
        console.log(res.user)
    })
    .catch((err) => {
        alert(err.message)
        console.log(err.code)
        console.log(err.message)
    })
}
function login(){
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    auth.signInWithEmailAndPassword(email, password)
    .then((res) => {
        console.log(res.user)
    })
    .catch((err) => {
        alert(err.message)
        console.log(err.code)
        console.log(err.message)
    })
}

const lg_btn= document.getElementById("login-btn");
    lg_btn.addEventListener('click', (e)=>{
    login();
    e.preventDefault();
});


const sn_btn = document.getElementById("signup-btn");
sn_btn.addEventListener('click', (e)=>{
    register();
    e.preventDefault();
});
