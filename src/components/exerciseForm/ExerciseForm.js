import React, { Component } from 'react';
class ExerciseForm extends Component {
    state = {  }
    render() { 
        return (
            <div>
            <input type="text" placeholder="name"></input>
            <input type="date" placeholder="Date"></input>
            <input type="number" placeholder="kg"></input>
            <button className="btn btn-primary" type="submit">Submit</button>
            </div> 
            );
    }
}
 
export default ExerciseForm;