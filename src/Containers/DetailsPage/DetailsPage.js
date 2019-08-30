import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

import Loader from '../../Components/Loaders/PageLoader/Loader';

import { ACTION_INCREMENT_LIKE } from '../../Utilities/ReducerActions';
import classes from './DetailsPage.module.css';

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
                <button onClick={this.props.onIncrementLike}>Increment Like</button>
                <Loader loading={this.state.showLoader}>
                    <div className={classes.UserCard}>
                        <p className={classes.UserId}>{'ID => ' + item.id}</p>
                        <p>{'Username => ' + item.username}</p>
                        <p>{'Name => ' + item.name}</p>
                        <p>{'Email => ' + item.email}</p>
                    </div>
                </Loader>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementLike: () => dispatch({type: ACTION_INCREMENT_LIKE})
    }
}

export default connect(null, mapDispatchToProps)(DetailsPage);