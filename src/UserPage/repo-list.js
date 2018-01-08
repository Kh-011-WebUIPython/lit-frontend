import React from 'react';
import RepoListItem from './repo-list-item';

const RepoList = ({repos}) => {
    return (
        <div>
            {repos.map((item, key) => <RepoListItem item={item} key={key}/>)}
        </div>
    );
};

export default RepoList;