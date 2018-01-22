import React from 'react';
import RepoListItem from './repo-list-item';

const RepoList = (props) => {
  if (!props.repos.length) {
    return (<h1>Nothing here yet :(</h1>);
  }
  return (
    <div>
      {props.repos.map((item, key) => (<RepoListItem
        name={item.name}
        description={item.description}
        author={item.author}
        key={key}
      />))}
    </div>
  );
};

export default RepoList;
