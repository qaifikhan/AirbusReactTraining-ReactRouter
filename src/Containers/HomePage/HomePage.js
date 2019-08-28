import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

import classes from './Homepage.module.css';
import Loader from '../../Components/Loaders/PageLoader/Loader';
import { DETAILS_PAGE_URL } from '../../Utilities/RouteEndpoints';

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
        let renderUserList = this.state.userList.map((item) => {
            return (
                <div className={classes.UserCard}>
                    <Link to={DETAILS_PAGE_URL + item.id} >
                        <p className={classes.UserId}>{item.id}</p>
                        <p>{item.username}</p>
                        <p>{item.name}</p>
                        <p>{item.email}</p>
                    </Link>
                </div>
            )
        });

        return(
            <div className={classes.MainContainer}>
                {this.state.showLoader ?
                <Loader />
                :
                <div>
                    <h1>HomePage</h1>
                    <button onClick={this.props.onIncrementClick}>Increment Like</button>
                    <div className={classes.UserList}>
                        {renderUserList}
                    </div>
                </div>}
            </div>
        );
    }
}

export default HomePage;