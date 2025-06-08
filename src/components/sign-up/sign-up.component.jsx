import { createAuthUserWithEmailAndPassword, createUserFromAuth } from '../../utils/firebase/firebase.util';
import { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import '../sign-up/sign-up.styles.scss'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;


    const resetFormFields = () => {
        // Reset State to default
        setFormFields(defaultFormFields);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do no match");
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserFromAuth(user, { displayName });
            resetFormFields();

        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert("Email already exists");
            }
            console.log('User creation encountered and error:', error);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <div className='sign-up-container'>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Display Name"
                    required
                    onChange={handleChange}
                    type="text"
                    name='displayName'
                    value={displayName}
                />
                <FormInput
                    label="Email"
                    required
                    onChange={handleChange}
                    type="email"
                    name='email'
                    value={email}
                />
                <FormInput
                    label="Password"
                    required
                    onChange={handleChange}
                    type="password"
                    name='password'
                    value={password}
                />
                <FormInput
                    label="Confirm Password"
                    required onChange={handleChange}
                    type="password"
                    name='confirmPassword'
                    value={confirmPassword}
                />
                <Button buttonType='' type="submit">Sign Up</Button>

            </form>
        </div>
    )
}

export default SignUpForm;
