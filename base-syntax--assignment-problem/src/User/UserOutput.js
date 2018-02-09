import React from 'react';

const userOutput = (props) => {
    const instyle= {
        // border-style:'solid'
        // border-color:'red'
        border: '2px solid red'
    };
    return (
        <div style={{border:'2px solid blue'}}>
        <p>dfefef</p>
        <p>From props: {props.userName}</p>
        </div>
    )
};

export default userOutput;