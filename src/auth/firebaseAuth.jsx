import firebase from '../config/firebaseConfig';

const firebaseUIAuthConfig = {
    signInOptions: [
        {
            provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
            signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD
        },
        {
            provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            // Forces account selection even when one account is available.
            scopes: [
                'https://www.googleapis.com/auth/contacts.readonly'
            ],
            customParameters: {
                prompt: 'select_account'
            }
        },
        {
            provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            scopes: [
                'public_profile',
                'email',
                'user_likes',
                'user_friends'
            ],
            customParameters: {
                // Forces password re-entry.
                auth_type: 'reauthenticate'
            }
        },
        {
            provider: firebase.auth.GithubAuthProvider.PROVIDER_ID,
        },
    ],
    signInSuccessUrl: "/"
}

const FirebaseAuth = () => {
    return <div>

    </div>
}
