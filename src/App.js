import React, { Component } from "react";
import SearchBar from "./components/SearchBar";
import ToDoList from "./components/ToDoList";
import "./App.css";

class App extends Component {
  state = {
    todo: "",
    todos: [],
  };

  handleChange = (event) => {
    this.setState({ todo: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.todo) {
      this.setState({
        todos: [this.state.todo, ...this.state.todos],
        todo: "",
      });
    }
  };

  handleDelete = (id) => {
    const newToDos = this.state.todos.filter((todo) => todo !== id);
    this.setState({ todos: newToDos });
  };

  // gjej todo me ate id
  // ndrysho vleren me vleren e re
  // update state-in e todove
  handleEdit = (value, id) => {
    const updatedTodos = [...this.state.todos];
    const newId = updatedTodos.indexOf(id);
    updatedTodos[newId] = value;
    this.setState({ todos: updatedTodos });
  };

  render() {
    return (
      <div className="app-container ">
        <SearchBar
          todo={this.state.todo}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        {this.state.todos.length > 0 ? (
          <ToDoList
            todos={this.state.todos}
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit}
          />
        ) : (
          <div>No todos</div>
        )}
      </div>
    );
  }
}

export default App;
