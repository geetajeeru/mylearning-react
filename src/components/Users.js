import React, {Component} from "react";
import {connect} from "react-redux";
import {loadUsers} from "../actions/userActions";
import {Link} from "react-router-dom";

class Users extends Component {

    constructor() {
        super();
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        this.props.loadUsers();
    }

    static getDerivedStateFromProps(props, state) {
        if(props.users !== state.users) {
            return {
                users: props.users
            }
        }
    }

    render() {
        const{users} = this.state;
        console.log("users list ", users);
        return (
            <div className="users">
                <h1>List of Users</h1>
                <table className="userTable">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Company</th>
                            <th>Todos</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.company.name}</td>
                                <td><Link to={`/users/${user.id}/todos`} className="todosLink">Click Here</Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    users: state.user.users
});

export default connect(mapStateToProps, {loadUsers})(Users);