import React from 'react';
import { useState } from 'react';

function NameForm(props) {
    const [input, setInput] = useState('ssss');
    const halderChange = (evt) => {
        setInput(evt.target.value);

    }

    const submitHandler = (evt) => {
       evt.preventDefault();
       alert('OUTPUT: ' + ' ' + input)
       setInput('')
    }
    return (
        <div>
            <h1>{input}</h1>
            <form action="" onSubmit={submitHandler}>
                <label htmlFor="">
                    Имя
                    <input type="text" onChange={halderChange}/>
                    <button type='submit'>Добавить</button>
                </label>
            </form>
        </div>
    );
}

export default NameForm;