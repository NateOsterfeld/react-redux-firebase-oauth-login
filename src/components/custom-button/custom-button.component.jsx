import React from 'react';
import { CustomButtonContainer } from './custom-button-styles'

// App <-- SignInSignUp.page <-- signIn | signUp <-- CustomButton | FormInput
const CustomButton = ({ children, ...props }) =>
    <CustomButtonContainer {...props}>
        { children }
    </CustomButtonContainer>

export default CustomButton;
