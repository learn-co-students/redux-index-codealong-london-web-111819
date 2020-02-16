import React, { Component } from 'react';
import { connect } from 'react-redux'

class TodosContainer extends Component {

  render() {
      console.log(this.props)
    return(
      <ul>
          {this.props.todos.map(todo => <li>{ todo }</li>)}
      </ul>
    );
  }
};

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(TodosContainer);