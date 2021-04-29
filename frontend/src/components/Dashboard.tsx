import React from 'react'
import Todo, {TodoItem} from './Todo'

const Dashboard = () => {
    return <div>
    {todos.map(item => (
        <Todo name={item.name} isFinished={item.isFinished} dailyRepeat={item.dailyRepeat} />
    ))}

    </div>
    
}

const todos: TodoItem[] = [
    {name: "making the bed", isFinished: false, dailyRepeat: true},
    {name: "exercise", isFinished: false, dailyRepeat: true},
    {name: "read", isFinished: false, dailyRepeat: true},
    {name: "hang up your clothes", isFinished: false, dailyRepeat: true},
    {name: "Healty nutrition", isFinished: true, dailyRepeat: true},
]

export default Dashboard;
{/* <Todo name={item.name} isFinished={item.isFinished} dailyRepeat={item.dailyRepeat} /> */}
