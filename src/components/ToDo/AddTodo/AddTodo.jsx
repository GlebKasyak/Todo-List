import React from "react";
import PropTypes from "prop-types";

export class AddTodo extends React.Component {

    state = {
        title: ""
    };

    onChange = (e) => {
        this.setState({title: e.target.value})
    };

    onSubmit = (e) => {
        e.preventDefault();

        this.props.addTodo(this.state.title);
        this.setState({title: ""});
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input
                        className="add-todo"
                        type="text"
                        name="title"
                        placeholder="Add Todo..."
                        value={ this.state.title }
                        onChange={ this.onChange }

                    />
                    <button className="btn">Add Task</button>
                </form>
            </div>
        )
    }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired,
};