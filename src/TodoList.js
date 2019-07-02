import React from "react"
class TodoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: []
        }
    }
    render() {

        return (

            <div>
                <ul className="list-group">
                    {this.props.tasks.map((task) => {
                        console.log(task)
                        return <li className="list-group-item">{task.task}
                            <button className="btn btn-danger" style={{marginLeft:100 +'px'}} onClick={this.props.deleteTask.bind(this,task.id)}>Delete</button>
                            <button className="btn btn-success" onClick={this.props.markComplete.bind(this,task.id)}>Mark Completed</button>
                        </li>

                    })}

                </ul>
            </div>
        )
    }
}
export default TodoList