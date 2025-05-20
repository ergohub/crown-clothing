import { signInWithGooglePopup } from '../../utils/firebase/firebase.util';

const SignIn = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        console.log(response);
    }

    return (
        <>
            <h1> This is the sign in page</h1 >
            <button onClick={logGoogleUser}>Sign in with Google</button>
        </>
    )
}

export default SignIn;