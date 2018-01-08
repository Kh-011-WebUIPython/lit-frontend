import React from "react";
import Author from './author';
import {Link} from 'react-router-dom';

const RepoListItem = (item) => {
    return (
        <div className="border p-2 pl-3 pb-3 mt-2">
            <div className="flex justify-content-between">
                <h2><Link to='/#'>{item.name}</Link></h2>
                {item.author && <Author>{item.author}</Author>}
            </div>
            <p>{item.description}</p>
        </div>
    );
};

export default RepoListItem;