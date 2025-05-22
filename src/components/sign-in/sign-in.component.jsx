import { signInWithGooglePopup, createUserFromAuth, } from '../../utils/firebase/firebase.util';
import SignUpForm from '../sign-up/sign-up.component';


const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserFromAuth(user)
    }

    return (
        <>
            <h1> This is the sign in page</h1 >
            <button onClick={logGoogleUser}>Sign in with Google</button>

            <SignUpForm></SignUpForm>
        </>
    )
}

export default SignIn;