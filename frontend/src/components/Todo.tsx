import {useEffect, useState} from 'react';
import {Row, Col} from 'react-bootstrap'

export interface TodoItem{
    name: string;
    isFinished: boolean;
    dailyRepeat: boolean;
}

const styles = {
    border: '1px solid black',
}

const Todo = (props: TodoItem) => {
    const {name, isFinished} = props;

    const [finished, setFinished] = useState(isFinished)

    let displayIsFinished = "No"

    if (finished) {
        displayIsFinished = "Yes"
    }

    return (
        <div style={styles}>
            <Row >
                <Col><h2>{name}</h2></Col>
                <Col><button className={`btn ${checkBtnState(finished)}`} onClick={() => setFinished(!finished)}>{displayIsFinished}</button></Col>
                <Col><h2>{props.dailyRepeat}</h2></Col>
            </Row>
        </div>
    );
}

const checkBtnState = (state: boolean) => {
    if (state) return 'btn-success'
    return 'btn-danger'
}

export default Todo;
