import './form-input.styles.jsx'

import { Group, Input, FormInputLabel } from '../form-input/form-input.styles';

const FormInput = ({ label, ...otherProps }) => {
    return (
        // props coming from app 
        <Group>
            <Input {...otherProps} />
            {label && (
                <FormInputLabel
                    shrink={otherProps.value.length}>
                    {label}
                </FormInputLabel>
            )}
        </Group>
    )
}

export default FormInput;