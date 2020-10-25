import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import data from '../../exercises.json';

class ExerciseData extends Component {
    state = { 
        exercises: data,
        tags: [1, 2, 3, 4]
     }
    
    loadExercises(){
         return this.state.exercises.map( data =>
                <tr>
                    <td key={data.name}>{data.name}</td>
                    <td key={data.name}>{data.kg}</td>
                </tr> 
        )
    };

    render() { 
        return (
            <div>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Exercise</th>
                            <th>Kg</th>
                            <th>Date</th>
                            <th></th>
                        </tr>    
                    </thead>
                    <tbody>
                        {this.loadExercises()}
                    </tbody>
                </Table>
            </div> 
        );
    }
}
 
export default ExerciseData;