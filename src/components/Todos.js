import React from "react";
import TodoItems from './TodoItem';
import PropTypes from 'prop-types';

const Todos = props => {
    return props.todos.map(todo => 
    <TodoItems key={todo.id} todo={todo} markComplete={props.markComplete}/>
    );
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;
