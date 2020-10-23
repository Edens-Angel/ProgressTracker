import React, { Component } from 'react';
import { Button, Table } from 'react-bootstrap';
import data from '../../exercises.json';

class ExerciseData extends Component {
    state = {  }
    
    loadExercises(){
         data.map( data => {
            return (
                <tr>
                    <td key={data.exercise}></td>
                    <td key={data.kg}></td>
                </tr>
            )
        })
    };

    render() { 
        return (
            <div>
                <Table striped bordered  variant="dark">
                    <thead>
                        <tr>
                            <th>Exercise</th>
                            <th>Kg</th>
                            <th>Date</th>
                            <th></th>
                        </tr>    
                    </thead>
                    <tbody>
                        {/* TODO data */}
                    </tbody>
                </Table>
            </div> 
        );
    }
}
 
export default ExerciseData;