import React from "react";
import PropTypes from "prop-types";

import { ToDoItem } from "./ToDoItem";

export class ToDo extends React.Component {

    render() {

        const { todos, markComplete, delTodo } = this.props;

        return todos.map(( todo ) => (
            <ToDoItem
                key={ todo.id }
                todo={ todo }
                markComplete={ markComplete }
                delTodo={ delTodo }
            />
        ))
    }
}

ToDo.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
};