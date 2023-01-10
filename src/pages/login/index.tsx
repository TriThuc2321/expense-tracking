import { Navigate } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';

function Login() {
    const auth = getAuth();

    const handleLoginWithGoogle = async () => {
        const provider = new GoogleAuthProvider();

        const {
            user: { uid, displayName },
        } = await signInWithPopup(auth, provider);

        console.log('register', uid);
        console.log('register', displayName);
    };

    if (localStorage.getItem('accessToken')) {
        return <Navigate to="/" />;
    }

    return (
        <div className="flex justify-center items-center w-screen h-screen">
            <div className="w-1/3 px-6 py-8 bg-primary">
                <h1>Expense tracker</h1>
                <p className="mt-2">Beware of little expenses. A small leak will sink a great ship.</p>
                <button onClick={handleLoginWithGoogle}>Login google</button>
            </div>
        </div>
    );
}

export default Login;
