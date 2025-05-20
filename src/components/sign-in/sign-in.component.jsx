import { signInWithGooglePopup, createUserFromAuth, } from '../../utils/firebase/firebase.util';

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserFromAuth(user)
    }

    return (
        <>
            <h1> This is the sign in page</h1 >
            <button onClick={logGoogleUser}>Sign in with Google</button>
        </>
    )
}

export default SignIn;