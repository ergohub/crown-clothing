import { BaseButton, GoogleSignInButton, InvertedButton } from './button.styles';

// Button type object
export const BUTTON_TYPE_CLASSES = {
    base: 'base',
    google: 'google-sign-in',
    inverted: 'inverted'
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => {
    const buttonMap = {
        [BUTTON_TYPE_CLASSES.base]: BaseButton,
        [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
        [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,

    };

    return buttonMap[buttonType] || BaseButton; // Fallback in case of empty string
}

const Button = ({ children, buttonType, ...otherProps }) => {
    const CustomButton = getButton(buttonType);
    // console.log('buttonType passed in:', buttonType);
    return <CustomButton {...otherProps}>{children}</CustomButton>
};

export default Button;