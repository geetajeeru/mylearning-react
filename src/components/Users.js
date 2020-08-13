import React, {Component} from "react";
import {connect} from "react-redux";
import {loadUsers} from "../actions/userActions";
import avatar from "../assets/avatar.png";

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

    onCardClick(id) {
        this.props.history.push(`/users/${id}/todos`);
    }

    render() {
        const{users} = this.state;
        console.log("users list ", users);
        return (
            <div className="users">
                <h1>List of Users</h1>
                
                {users.map(user => (
                    <div className="card" key={user.id} onClick={()=>this.onCardClick(user.id)}>
                        <img src={avatar} className="avatar-icon" alt="user"/>
                        <br/>
                        <span>{user.name}</span>
                        <hr/>
                        <div className="card-body">
                            <div>
                                <p><i class="fas fa-envelope"></i></p>
                                <p><i class="fas fa-phone-volume"></i></p>
                                <p><i class="fas fa-building"></i> </p>
                            </div>
                            <div>
                                <p><span>&nbsp;{user.email}</span></p>
                                <p><span>&nbsp;{user.phone}</span></p>
                                <p><span>&nbsp;{user.company.name}</span></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    users: state.user.users
});

export default connect(mapStateToProps, {loadUsers})(Users);