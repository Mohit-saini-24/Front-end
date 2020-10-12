import React from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import axios from 'axios';
// import config from '../../config'
const firebaseConfig = {
    apiKey: "AIzaSyCS3mJu2c6qP30jXhY229XC-5CfrOJvSnU",
    authDomain: "education-79eda.firebaseapp.com",
    databaseURL: "https://education-79eda.firebaseio.com",
    projectId: "education-79eda",
    storageBucket: "education-79eda.appspot.com",
    messagingSenderId: "587872858491",
    appId: "1:587872858491:web:e0af61c8944ff189990dde",
    measurementId: "G-8YYDKLS62P"
};
firebase.initializeApp(firebaseConfig)


const Login = (props) => {
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional



    const uiConfig = {
        // Popup signin flow rather than redirect flow.
        signInFlow: 'popup',
        // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
        signInSuccessUrl: '/signedIn',
        // We will display Google and Facebook as auth providers.
        signInOptions: [
            {
                provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
                recaptchaParameters: {
                    size: 'invisible', // 'invisible' or 'compact'
                    badge: 'bottomleft' //' bottomright' or 'inline' applies to invisible.
                },
                defaultCountry: 'IND',
                defaultNationalNumber: '',
                loginHint: '+91'
            }
        ],
        callbacks: {
            // Avoid redirects after sign-in.
            signInSuccessWithAuthResult: (authResult, redirectUrl) => {
                handleSignedInUser(authResult.user)
            }
        }
    };



    const handleSignedInUser = async function (user) {
        try {

            const idToken = await user.getIdToken();

            console.log(idToken);

            axios.defaults.headers.common = { Authorization: `${idToken}` };
            const response = await axios.post('/sessionLogin')
            console.log(response)
            localStorage.setItem('sessionCookie', `${response.data.sessionCookie}`);
            
            return props.history.push('/')
            // axios.get('/newUser')

        } catch (error) {
            console.log(error.response)
            return props.history.push('/login')
        }
    };

    return (
        <div>
            Login Page
            <br />
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </div>
    )
}
export default Login