// Import components
import SignInForm from "../sign-in/sign-in.component"
import SignUpForm from "../sign-up/sign-up.component"

// import styles
import '../authentication/authentication.styles.scss';

const Authentication = () => {
    return (
        <div className="authentication-container">
            <SignInForm></SignInForm>
            <SignUpForm></SignUpForm>
        </div>
    )
}

export default Authentication;