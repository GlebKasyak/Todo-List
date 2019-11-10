import React from 'react';
// import uuid from "uuid";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";

import { ToDo } from "./components/ToDo";
import Header from "./components/Header"
import { AddTodo } from "./components/ToDo/AddTodo";
import About from "./components/Pages/About";
import { HOME_PAGE, ABOUT_PAGE, URL } from "./constants/const";

class  App extends React.Component {
  state = {
    todos: []
  };

  componentDidMount() {
    axios.get(URL + "?_limit=8")
        .then(res => this.setState({todos: res.data}))
  };

  markComplete = ( id ) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }

      return todo
      }) })
  };

  addTodo = ( title ) => {
    axios.post( URL,{
      title,
      completed: false
    })
        .then(res =>
            this.setState({todos: [...this.state.todos, res.data]})
        )
  };

  delTodo = ( id ) => {
    axios.delete(URL + `/${id}`)
        .then(res =>
            this.setState({todos: [...this.state.todos.filter( todo =>
              todo.id !== id )]})
        )


  };

  render() {
    return (
        <Router>
          <div className="App">
            <div className="dontainer">
              <Header />
              <Route exact path={ HOME_PAGE } render={props => (
                  <>
                    <AddTodo addTodo={ this.addTodo }/>
                    <ToDo
                        todos={ this.state.todos }
                        markComplete={ this.markComplete }
                        delTodo={ this.delTodo }
                    />
                  </>
              )} />
              <Route path={ ABOUT_PAGE } component={ About }/>
            </div>
          </div>
        </Router>
    );
  }
}

export default App;
