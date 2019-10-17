import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllUsers } from '../store/UserActions'
import Aux from '../../Hoc/Auxillary';
import User from '../components/User';
import logo from '../../logo.svg';
import styles from './UserList.module.scss';

export class UserList extends Component {
    componentDidMount() {
        this.props.getAllUsers();
    }

    render() {
        return (
            <Aux>
                {this.props.userListLoading ?
                    <img src={logo} className={styles['App-logo']} alt="logo" />
                    : <User userList={this.props.userList} />
                }
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        userList: state.user.data,
        userListLoading: state.user.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllUsers: () => dispatch(getAllUsers())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList)
