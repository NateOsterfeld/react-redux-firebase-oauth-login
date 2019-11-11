import React from 'react'
import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'

// App.js <-- Sign-In-Sign-Up.page --> SignIn | SignUp --> FormInput | CustomButton
const SignInSignUp = () =>
    <div className='sign-in-sign-up'>
        <SignIn />
        <SignUp />
    </div>

export default SignInSignUp
