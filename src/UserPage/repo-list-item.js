import React from "react";
import Author from './author';
import {Link} from 'react-router-dom';

const RepoListItem = ({name, author, description}) => {
    return (
        <div className="border p-2 pl-3 pb-3 mt-2">
            <div className="flex justify-content-between">
                <h2><Link to={`/${name}`}>{name}</Link></h2>
                {author && <Author>{author}</Author>}
            </div>
            <p>{description}</p>
        </div>
    );
};

export default RepoListItem;