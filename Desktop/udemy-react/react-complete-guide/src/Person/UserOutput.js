import React from 'react';
import UserInput from './UserInput'
import './person.css'
const userOutput = (props) => {
    return (
        <div className='"UserOutput'>
            <p>username:{props.userName}</p>
            <p>some more random text</p>
        </div>
    )
}
export default userOutput;