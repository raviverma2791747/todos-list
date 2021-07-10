import React from 'react'
import TodoItem from '../components/TodoItem'

function Todos(props) {
    let myStyle = {
        minHeight: "45vh"
    }
    return (
        <div className="container my-3" style={myStyle}>
            <h3 className="text-center my-3">Todos List</h3>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {
                    props.todos.length === 0 ? "No todos to display" : props.todos.map((todo) => {
                        return (<TodoItem todo={todo} onDelete={props.onDelete} />)
                    })}
            </div>
        </div>
    )
}

export default Todos
