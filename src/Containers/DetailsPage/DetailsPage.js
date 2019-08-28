import React, { Component } from 'react';
import axios from 'axios';

import classes from './DetailsPage.module.css';
import Loader from '../../Components/Loaders/PageLoader/Loader';

class DetailsPage extends Component {
    state = {
        userData: {},
        showLoader: true
    }

    componentDidMount() {
        if(this.props.match !== null && this.props.match.params !== null && this.props.match.params.userId !== undefined) {
            axios.get('https://jsonplaceholder.typicode.com/users/' + this.props.match.params.userId)
            .then((response) => {
                this.setState({userData: response.data, showLoader: false})
            })
            .catch((err) => {
            })
        }
    }

    render() {
        let item = this.state.userData;

        return(
            <div className={classes.MainContainer}>
                <h1>Details Page</h1>
                <button onClick={this.props.onIncrementClick}>Increment Like</button>
                {
                    this.state.showLoader ? <Loader /> :
                    <div className={classes.UserCard}>
                        <p className={classes.UserId}>{'ID => ' + item.id}</p>
                        <p>{'Username => ' + item.username}</p>
                        <p>{'Name => ' + item.name}</p>
                        <p>{'Email => ' + item.email}</p>
                    </div>
                }
            </div>
        );
    }
}

export default DetailsPage;