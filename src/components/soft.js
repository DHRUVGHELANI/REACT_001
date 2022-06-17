import React, { Children } from 'react';
function soft(props) {
    return (
        <>
            <h1>hello {props.name}</h1>{props.children}
        </>
    );
}

export default soft;