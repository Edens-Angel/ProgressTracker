import React, { Component } from 'react';
import styles from './exerciseForm.module.css'
class ExerciseForm extends Component {
    state = {  }
    render() { 
        return (
            <div className={styles}>
            <input type="text" placeholder="name"></input>
            <input type="date" placeholder="Date"></input>
            <input type="number" placeholder="kg"></input>
            </div> 
            );
    }
}
 
export default ExerciseForm;