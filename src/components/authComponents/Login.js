import React from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import axios from 'axios';
// import config from '../../config'

const Login = () => {
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

    function getCookie(name) {
        const v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
        return v ? v[2] : null;
    }

    const handleSignedInUser = function (user) {
        console.log(user)
        // db.collection('users').doc(user.uid).set({
        //     user: user.uid,
        //     phoneNumber: user.phoneNumber
        // })

        user.getIdToken().then((idToken) => {
            // Session login endpoint is queried and the session cookie is set.
            // CSRF token should be sent along with request.
            // console.log(idToken)
            const csrfToken = getCookie('csrfToken')
            return postIdTokenToSessionLogin('/login', idToken, csrfToken)
                .then(() => {
                    // Redirect to profile on success.
                    return window.location.assign('/home');
                }).catch(error => {
                    console.log(error)
                    return window.location.assign('/');
                })
        }).catch(error => {
            return window.location.assign('/');
        });
    };

    const postIdTokenToSessionLogin = async function (url, idToken, csrfToken) {
        // POST to session login endpoint.
        console.log('post id token to session login')
        var data = { idToken: idToken, csrfToken: csrfToken }
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            // 'Authorization': 'JWT fefege...'
        }
        await axios.post(
            url,
            data,
            {
                headers: headers
            }
        )        
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