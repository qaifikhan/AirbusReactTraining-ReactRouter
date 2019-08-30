import React from 'react';
import UserCard from '../../Components/Cards/UserCard/UserCard';

import classes from './ListGenerator.module.css';

let ListGenerator = (props) => {
    let list = [];
    switch(props.type) {
        case 'UserList':
            list = props.userList.map((item) => {
                return (
                    <UserCard item={item} />
                )
            })
            break;
        default:
            list = []
    }
    return (
        <div className={classes.ListContainer}>
            {list}
        </div>
    )
}

export default ListGenerator