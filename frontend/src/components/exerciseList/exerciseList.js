import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import data from '../../data/exercises.json';

class ExerciseList extends Component {
    state = { 
        exercises: data,
        tags: [1, 2, 3, 4]
     }
    
    loadExercises(){
         return this.state.exercises.map( data =>
                <tr key={data.id}>
                    <td className="badge badge-info">{data.name}</td>
                    <td>{data.kg}</td>
                    <td>{Date.now()}</td>
                    <td>
                        <button onClick={() => this.handleAddExercise(data)} className="btn btn-danger">Delete</button>
                    </td>
                </tr> 
        )
    };

    handleAddExercise = data =>{
        if (data.id != null){
            alert(data.id);
        }
    }

    render() { 
        return (
            <div>
                <Table striped bordered hover variant="white">
                    <thead>
                        <tr>
                            <th>Exercise</th>
                            <th>Kg</th>
                            <th>Date</th>
                            <th>#</th>
                        </tr>    
                    </thead>
                    <tbody>
                        {this.loadExercises()}
                    </tbody>
                </Table>
                {/* <button onClick={() => this.handleAddExercise()} >Test</button> */}
            </div> 
        );
    }
}
 
export default ExerciseList;