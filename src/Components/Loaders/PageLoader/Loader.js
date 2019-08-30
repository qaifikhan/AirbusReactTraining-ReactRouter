import React from 'react';

let Loader = (props) => {
    return(
        props.loading?
        <h1>Loading...</h1>
        :
        props.children
    )
}

export default Loader;