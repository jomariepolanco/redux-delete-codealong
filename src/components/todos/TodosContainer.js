import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo'

class TodosContainer extends Component {

  renderTodos = () => this.props.todos.map((todo) => <Todo key={todo.id} todo={todo} deleteTodo={this.props.deleteTodo} />)

  render() {
    return(
      <div>
        {this.renderTodos()}
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const mdp = dispatch => {
  return {
    deleteTodo: todoId => dispatch({type: 'DELETE_TODO', payload: todoId})
  }
}

export default connect(mapStateToProps, mdp)(TodosContainer);
