import React, {Component} from 'react';

const Content = (props) => {
    return (
        <div className="container pt-5 w-100">
            {props.children}
        </div>
    );
}

export default Content;