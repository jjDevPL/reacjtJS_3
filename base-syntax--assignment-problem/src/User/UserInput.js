import React, { Component } from 'react';
import './UserInput.css';

class userInput extends Component {

    render = ()=> (
        <div className='UserInput'>
            <input type="text" onChange={this.props.change} value={this.props.valueName}/>
        </div>
    )
};

export default userInput;