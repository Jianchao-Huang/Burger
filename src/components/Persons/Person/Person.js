import React, {Component} from 'react';
import classes from './Person.module.css';

class Person extends Component {
    render(){
        const style = {
            '@media(min-width: 500px)': {
                width: '450px'
            }
        }
        console.log('[Person.js] rendering...')
        return ( 
            <div className={classes.Person} sytle={style}>
                <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children} </p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </div>
        )
    }

}

export default Person;