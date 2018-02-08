import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'
import Dog from './Person/Dog'

class App extends Component {
    state = {
        persons: [
            {name: 'bla', age: 'cosik'},
            {name: 'bla2', age: 'cosik2'}
        ]
    }
    buttonHandler = (newVal) => {
        this.setState({
            persons: [
                {name:'new name', age:newVal}
            ]
        }) ;
        console.log('Button handler: '+newVal);
    }
    nameChangeHandler = (event)=> {
        this.setState({
            persons: [
                {name:event.target.value, age:3333}
            ]
        }) ;
        console.log('Name changeHandler: '+event.target.value);
    }

    tab = [
        1, 2, 3
    ]
    keyPress = (keyCode) => {
        /*console.log('Press:' + keyCode.keyCode + 'blabla:' + this.state.persons[0].age);*/

        console.log('Press:' + keyCode.keyCode + 'blabla:' + this.state.persons[0].age);
    }

    render() {
        const style = {
            backgroundColor :'white',
            font:'inherit',
            border: '2px solid blue',
            padding: '9px',
            cursor:'pointer'
        }

        return (
            <div className="App">
                <h1>bla bla alb2</h1>
                <h2>bla2</h2>
                <button 
                style={style}
                onClick={() => this.buttonHandler('Arrow')} onKeyDown={this.keyPress}>Button Click</button>
                <Person name='Iwo' age='23'/>
                <Person
                    name={this.state.persons[0].name}
                    age='4'
                    click={this.buttonHandler.bind(this,'Peron bind clikc')}
                    changed={this.nameChangeHandler}
                />
                <Dog name='Piesek'>
                    <h2>Ch1</h2>
                    <h2>{this.state.persons[0].age}</h2>
                </Dog>
            </div>
        );
        //return React.createElement('div',{className:'App'},React.createElement('h1',null,'blblblbbl'));
    }
}

export default App;
