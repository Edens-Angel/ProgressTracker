import React, { Component } from 'react';

class Counter extends Component {
    
    state = {  }
    render() { 
        return ( 
            <div>
                <div className="counter m-2 p-1">
                    <button onClick={() => this.props.onDecrement(this.props.id)} className="btn btn-warning">-</button>
                    <span className="badge badge-info">{this.props.value}</span>
                    <button onClick={() => this.props.onIncrement(this.props.id)} className="btn btn-primary">+</button>

                    <button onClick={() => this.props.onDelete(this.props.id)} className="btn btn-danger">Del</button>
                </div>
            </div>
         );
    }
}

 
export default Counter;