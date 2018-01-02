import React from 'react';

const Code = props => {
    return (
        <p className="mb-3">
            <span
                className="bg-grey py-1 monospaced f-9">{props.children}</span>
        </p>
    );
};

export default Code;