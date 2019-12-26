import React from 'react';

import './Clear.css'

const Clear = props => {
    return(
        <div className="clear-btn" onClick={props.clear}>
            {props.children}
        </div>
    )
}

export default Clear