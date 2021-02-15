import { useAuth } from '../../auth/AuthProvider';
import firebase from 'firebase';

const HeaderToolbar = () => {
    const { user, isLoading, logout } = useAuth();

    const isUserSignedIn = () => {
        if (!user) {
            return <button>Login</button>
        } else {
            return <span>{user}</span>
        }
    }

    const handleGoogleAuth = async () => {
        const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
        await firebase.auth().signInWithPopup(googleAuthProvider);
    }

    return (
        <div>
            { !user ? <span onClick={handleGoogleAuth}>Login</span> : <span>{user}</span> }
        </div>
    )
}

export default HeaderToolbar;
