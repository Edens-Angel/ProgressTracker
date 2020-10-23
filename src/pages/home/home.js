import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import DataContainer from '../../components/dataContainer/dataContainer';
import ExerciseData from '../../components/exerciseData/exerciseData';
import ExerciseForm from '../../components/exerciseForm/ExerciseForm';

class HomePage extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <Container>
                    <Row>
                        <DataContainer/>
                        <DataContainer/>
                        <DataContainer/>
                    </Row>

                    <Row>
                        <ExerciseData/>
                    </Row>
                        <ExerciseForm/>
                </Container>
            </div>
         );
    }
}
 
export default HomePage;