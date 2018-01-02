import React from 'react';

const Content = (props) => {
    return (
        <div className="container w-100">
            {props.children}
        </div>
    );
}

export default Content;