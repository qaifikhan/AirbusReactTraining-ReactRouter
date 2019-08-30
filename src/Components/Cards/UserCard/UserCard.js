import React from 'react';
import {Link} from 'react-router-dom';

import classes from './UserCard.module.css';
import { DETAILS_PAGE_URL } from '../../../Utilities/RouteEndpoints';

let UserCard = (props) => {
    return(
        <div className={classes.UserCard}>
            <Link to={DETAILS_PAGE_URL + props.item.id} >
                <p className={classes.UserId}>{props.item.id}</p>
                <p>{props.item.username}</p>
                <p>{props.item.name}</p>
                <p>{props.item.email}</p>
            </Link>
        </div>
    )
}

export default UserCard;