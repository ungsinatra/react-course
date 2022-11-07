import React from 'react';
import GuestGreating from './GuestGreating';
import UserGreating from './UserGreating';

function Greating(props) {
    let value;
    if(props.isUser){
        value = <UserGreating greating = {props.greating} /> ; 

    }else{
        value  = <GuestGreating  greating = {'пользователь не найден!'}/> ; 
    }

    return (
        <div>
            {value}
        </div>
    );
}

export default Greating;