import React from 'react';
import { useState } from 'react';
import Greating from './Greating';
import LogInButton from './LogInButton';
import LogOutButton from './LogOutButton';

function LoginControl(props) {
    let button;
    const [status, setStatus] = useState(false);
    const logOut = () => {
        console.log('logout')
        setStatus(false)
    };
    const logIn = () => {
        console.log('login')
        setStatus(true)
    }

    if (status) {
        button = <LogOutButton onClick={logOut} />
    } else {
        button = <LogInButton onClick={logIn} />
    }
    return (
        <div>
            <Greating isUser = {status} greating={props.name} />
            {button}
        </div>
    );
}

export default LoginControl;