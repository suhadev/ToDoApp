import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      item: [],
      loading: true
    }
  }
  getData = () => {

    axios.get('http://localhost:8080/todos')
      .then((res) => {
        console.log(res.data)
        let tasks = res.data
        console.log(res.data)
        this.setState({
          item: res.data,
          loading: false
        })

      })
  }
  addTask = (a, e) => {
    let task = { id: this.generateId(), task: a }
    e.value = ""
    axios.post('http://localhost:8080/todos', task)
      .then((res) => {
        this.setState({
          item: [...this.state.item, res.data]
        })
      })
  }
  generateId = () => {
    let a = new Date
    return a.toLocaleTimeString()
  }
  deleteTask = (a) => {
    let filteredArray = this.state.item.filter((i) => {
      console.log(i.id)
      return i.id === a
    })
    console.log(filteredArray[0].id)
    axios.delete(`http://localhost:8080/todos/${filteredArray[0].id}`)
      .then(() => {
        this.getData()
      })

    //this.setState({item:filteredArray})
  }
  markAsComplete = (e) => {

  }
  componentDidMount() {
    setTimeout(() => {
      this.getData()
    }, 3000)

  }
  render() {
    
      let loading = ""
      if (this.state.loading) {
        loading = <p>Loading...please wait!</p>
      } else {
        loading = <TodoList tasks={this.state.item} deleteTask={this.deleteTask} markComplete={this.markAsComplete} />
      }

      return (
        <div>
          <TodoForm addTask={this.addTask}/>
          {loading}
        </div>

      )
    }
  }


export default App;
