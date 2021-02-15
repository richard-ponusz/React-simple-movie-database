import { useState, useEffect, createContext, useContext } from 'react';
import firebase from 'firebase';

const AuthContext = createContext({
    user: null,
    isLoading: true,
    logout: () => {}
});

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const cancelAuthListener = firebase.auth().onIdTokenChanged(u => {
            setUser(u);
            setIsLoading(false);
        });

        return () => cancelAuthListener();
    }, []);

    return (
        <AuthContext.Provider value={{ user, isLoading, logout: () => firebase.auth().signOut() }}>
            { children }
        </AuthContext.Provider>
    )
};

const useAuth = () => {
    return useContext(AuthContext);
};

export { AuthProvider, useAuth };
