import React, { Component } from 'react';

class Dog extends Component {
    state = {
        persons: [
            {name:'max',age :28}
        ]
    }
    render() {
         return (
         <div>
            <p>Dog cosik ma na imie {this.state.persons[0].name}</p>
            <p>{this.props.children}</p>
         </div>
         )
    }
};
export default Dog;