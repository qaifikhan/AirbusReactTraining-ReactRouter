import React from 'react';

import {Link} from 'react-router-dom';

import classes from './Topbar.module.css';
import { ABOUT_PAGE_URL, LOGIN_PAGE_URL } from '../../../Utilities/RouteEndpoints';

let Topbar = (props) => {
    return(
        <div className={classes.Topbar}>
            <Link to={'/'}>Home</Link>
            <Link to={LOGIN_PAGE_URL}>Login</Link>
            <Link to={ABOUT_PAGE_URL}>About</Link>
            <p>Total Likes: {props.totalLikes}</p>
        </div>
    )
}

export default Topbar;