import React, { Component } from 'react';
import Counter from '../counter/counter';
import axios from "axios"

class CounterList extends Component {
    state = { 
        counters: []
     }

     componentDidMount(){
        this.getAllCounters()
     }

    render() { 
        return ( <div>
            {this.state.counters.map(counter => 
                <Counter key={counter.id} value={counter.value}
                onDecrement={() => this.handleDecrement(counter)}
                onIncrement={() => this.handleIncrement(counter)}
                onDelete={() => this.handleDelete(counter)}/>
            )}
            <button onClick={() => this.addRandomCounter()} className="btn btn-success">Add random</button>
        </div> );
    }

    handleIncrement(counter){
        const counters = [...this.state.counters]
        let newCounter = counters.find(e => {return e.id === counter.id});
        newCounter.value += 1
        this.setState(counters)
    }

    handleDecrement(counter){
        const counters = [...this.state.counters]
        const index = counters.indexOf(counter)
        counters[index].value -= 1
        this.setState(counters)
    }

    handleDelete(counter){
        const {id} = counter
        const newCounterList = this.state.counters.filter(counter => counter.id !== id)
        this.setState({counters: newCounterList})
    }

   async getAllCounters(){
        await axios.get("http://localhost:3000/counter")
        .then(response => {
            const counters = response.data
            this.setState({counters})
        }).catch(err => {
            console.log(err);
        })
    }

    /**
     * TODO change the getAllCounters to adding to state
     */
   async addRandomCounter(){
        const counters = this.state.counters
        const lastItem = counters[counters. length -1]
        await axios.post("http://localhost:3000/counter",
        {
            id: lastItem.id + 1,
            value: Math.floor(Math.random() * 1000)
        })
        .then(data => {
            this.getAllCounters()
        }).catch(err => {
            console.log(err);
        })
    }


}
 
export default CounterList;