// react dependecies
import { useState, useContext } from 'react';
// components
import { signInWithGooglePopup, createUserFromAuth, signInUserWithEmailAndPassword } from '../../utils/firebase/firebase.util';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
// import { UserContext } from '../../contexts/user.context';

// styles
import '../sign-up/sign-up.styles.scss';
import '../button/button.styles.scss';

// default state for form
const defaultFormFields = {
    email: '',
    password: ''
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    // const { setCurrentUser } = useContext(UserContext);

    const resetFormFields = () => {
        // Reset State to default
        setFormFields(defaultFormFields);
    };

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }


    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { user } = await signInUserWithEmailAndPassword(email, password);
            // setCurrentUser(user)
            resetFormFields();

        } catch (error) {
            if (error.code) {
                alert("Credentials Incorrect.  Please try again.")
            }
        }
    };

    return (
        <div className='sign-up-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Email"
                    required
                    onChange={handleChange}
                    type="email"
                    name="email"
                    value={email}
                />

                <FormInput
                    label="Password"
                    required
                    onChange={handleChange}
                    type="password"
                    name="password"
                    value={password}
                />
            </form>
            <div className='buttons-container'>
                <Button buttonType='' onClick={handleSubmit}>Sign in</Button>
                <Button buttonType='google' onClick={signInWithGoogle}>Google Sign In</Button>
            </div>
        </div>
    )
}

export default SignInForm;