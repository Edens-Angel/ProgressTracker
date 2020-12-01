import React, { Component } from 'react';
import ExerciseForm from "../exerciseForm/ExerciseForm"
import ExerciseList from "../exerciseList/exerciseList"
import { Row, Container } from 'react-bootstrap';

import "./dashboard.css"
import CounterList from '../counterList/counterList';

class Dashboard extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="dashboard">
                <Container>
                    <Row>
                        <CounterList/>
                        {/* <ExerciseList/> */}
                    </Row>
                        {/* <ExerciseForm/> */}
                </Container>
            </div>
         );
    }
}
 
export default Dashboard;