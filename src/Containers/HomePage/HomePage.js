import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import classes from './Homepage.module.css';
import Loader from '../../Components/Loaders/PageLoader/Loader';
import { DETAILS_PAGE_URL } from '../../Utilities/RouteEndpoints';
import { INCREMENT_LIKE, ACTION_INCREMENT_LIKE, ACTION_DECREMENT_LIKE, ACTION_INCREMENT_BY_VALUE, ACTION_DECREMENT_BY_VALUE, ACTION_INCREMENT_DISLIKE, ACTION_DECREMENT_DISLIKE } from '../../Utilities/ReducerActions';
import UserCard from '../../Components/Cards/UserCard/UserCard';
import ListGenerator from '../../Hoc/ListGenerator/ListGenerator';

class HomePage extends Component {
    state = {
        userList: [],
        showLoader: true
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            this.setState({userList: response.data, showLoader: false})
        })
    }

    render() {
        return(
            <Loader loading={this.state.showLoader}>
                <div className={classes.MainContainer}>
                    <div>
                        <h1>HomePage</h1>
                        <button onClick={this.props.onIncrementLike}>Increment Like</button>
                        <button onClick={this.props.onDecrementLike}>Decrement Like</button>
                        <button onClick={this.props.onIncrementDislike}>Increment Dislike</button>
                        <button onClick={this.props.onDecrementDislike}>Decrement Dislike</button>
                        <div className={classes.UserList}>
                            <ListGenerator userList={this.state.userList} type='UserList'/>
                        </div>
                    </div>}
                </div>
            </Loader>
        );
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onIncrementLike: () => dispatch({type: ACTION_INCREMENT_LIKE}),
        onDecrementLike: () => dispatch({type: ACTION_DECREMENT_LIKE}),
        onIncrementDislike: () => dispatch({type: ACTION_INCREMENT_DISLIKE}),
        onDecrementDislike: () => dispatch({type: ACTION_DECREMENT_DISLIKE}),
    }
}

export default connect(null, mapDispatchToProps)(HomePage);