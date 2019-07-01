import React from "react"

class TodoForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            item:"",
            element:""
        }
    }
    getValue = (e)=>{
        this.setState({
            item: e.target.value,
            element:e.target
        })
        //console.log(this.state.item)
    }
    

    render(){
        return(
            <div className="form-group">
            
                <input type="text" placeholder="Add Task" className="form-control" onChange={this.getValue}></input>
                <button className="btn btn-primary btn-block" onClick={this.props.addTask.bind(this,this.state.item,this.state.element)}>Add</button>
            </div>
        )
    }
}

export default TodoForm