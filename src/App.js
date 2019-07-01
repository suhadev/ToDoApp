import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      item:[]
    }
  }
  addTask = (a,e)=>{
    let task = {id:this.generateId(),item:a}
    this.setState({
      item:[...this.state.item,task]
      
    })
    e.value=""

  }
  generateId = ()=> {
    let a=  new Date
    return a.toLocaleTimeString()
  }
  deleteTask = (a)=>{
    let filteredArray = this.state.item.filter((i)=>{
      console.log(i.id)
      return i.id !== a
    })
    console.log(filteredArray)
    this.setState({item:filteredArray})
  }
  markAsComplete = (e)=>{

  }
  render() {
    return (
      <div>
        <TodoForm addTask={this.addTask}/>
        <TodoList tasks={this.state.item} deleteTask = {this.deleteTask} markComplete={this.markAsComplete}/>
      </div>

    )
  }
}

export default App;
