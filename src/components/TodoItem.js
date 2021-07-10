import React from 'react'

function TodoItem(props) {
    return (
        <div className="col">
            <div className="card shadow border-dark">
                <div className="card-body">
                    <h4 className="card-title">{props.todo.title}</h4>
                    <p>{props.todo.desc}</p>
                    <button className="btn btn-sm btn-danger" onClick={() => { props.onDelete(props.todo) }}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default TodoItem
