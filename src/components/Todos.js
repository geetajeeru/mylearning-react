import React, {Component} from "react";
import {connect} from "react-redux";
import {getTodos} from "../actions/userActions";
import {Link} from "react-router-dom";

class Todos extends Component {
    
    constructor() {
        super();
        this.state = {
            todos: []
        }
    }

    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.getTodos(id);
    }

    static getDerivedStateFromProps(props, state) {
        if(props.todos !== state.todos) {
            return {
                todos: props.todos
            }
        }
    }

    render() {
        const {todos} = this.state;
        return (
            <div className="todos">
                <Link to="/users" className="linkToUsers">Back To Users</Link>
                <h1>Todos associated with User</h1>
                <table className="userTable">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(todo =>(
                                <tr key={todo.id}>
                                    <td>{todo.title}</td>
                                    <td>{todo.completed ? "Completed" : "Todo"}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    todos: state.user.todos
})

export default connect(mapStateToProps, {getTodos})(Todos);