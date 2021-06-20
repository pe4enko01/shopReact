import React from 'react';
import SignIn from '../../components/singin/singin';
import SignUp from '../../components/signup/signup';

import "./signup-in.scss";

const SingInAndSignUpPage = () => {
    return(
        <div className="sign">
            <SignIn/>
            <SignUp/>
        </div>

    )
}

export default SingInAndSignUpPage;