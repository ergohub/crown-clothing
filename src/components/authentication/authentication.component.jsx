// Import components
import SignInForm from "../sign-in/sign-in.component"
import SignUpForm from "../sign-up/sign-up.component"

// import styles
import { AuthenticationContainer } from '../authentication/authentication.styles';

const Authentication = () => {
    return (
        <AuthenticationContainer>
            <SignInForm></SignInForm>
            <SignUpForm></SignUpForm>
        </AuthenticationContainer>
    )
}

export default Authentication;