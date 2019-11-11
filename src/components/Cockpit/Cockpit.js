import React from 'react';
import classes from './Cockpit.module.css'
const cockpit = (props) =>{
    let btnClass = '';
    const assginedClasses = [];
    if(props.showPersons){
        btnClass = classes.Red;
    }
    if(props.persons.length <=2){
      assginedClasses.push(classes.red);
    }
    if(props.persons.length <=1){
      assginedClasses.push(classes.bold);
    }
   

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assginedClasses.join(' ')}> This is fantastic!</p>
            <button className={btnClass} onClick={props.clicked}>Toggle Persons</button>
        </div>
       
    );
}

export default cockpit;