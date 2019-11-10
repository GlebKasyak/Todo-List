import React from "react";
import PropTypes from "prop-types";


export class ToDoItem extends React.Component {

    render() {

        const { todo, markComplete, delTodo } = this.props;
        const completed = todo.completed ? "completed" : "";

        return (
            <div  className={`todo-item ${ completed }`}>
                <p>

                    {/*маркировка.привязка. чтобы знать какая задача замаркирована*/}
                    <label>
                        <input
                            type="checkbox"
                            onChange={ markComplete.bind(this, todo.id) }
                            className="btn-check"
                            checked={todo.completed}
                        />
                        <span></span>
                    </label>
                    { todo.title }
                    <button onClick={ delTodo.bind(this, todo.id) } className="delete">x</button>
                </p>
            </div>
        )
    }
}

ToDoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
};