import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBarRepo from './navbar-repo';
import BranchDropdown from './branch-dropdown';
import { Button } from 'reactstrap';
import RepositoryTeam from './repo-team';

const commits = [
  {
    avatar: 'https://picsum.photos/50/50',
    title: 'something do it',
    time: '12:12:123456',
    hash: '12ds343g',
  },
  {
    avatar: 'https://picsum.photos/50/50',
    title: 'something do it',
    time: '12:12:123456',
    hash: '12ds343g',
  },
  {
    avatar: 'https://picsum.photos/50/50',
    title: 'something do it',
    time: '12:12:123456',
    hash: '12ds343g',
  },
  {
    avatar: 'https://picsum.photos/50/50',
    title: 'something do it',
    time: '12:12:123456',
    hash: '12ds343g',
  },
  {
    avatar: 'https://picsum.photos/50/50',
    title: 'something do it',
    time: '12:12:123456',
    hash: '12ds343g',
  },
  {
    avatar: 'https://picsum.photos/50/50',
    title: 'something do it',
    time: '12:12:123456',
    hash: '12ds343g',
  },
  {
    avatar: 'https://picsum.photos/50/50',
    title: 'something do it',
    time: '12:12:123456',
    hash: '12ds343g',
  },
  {
    avatar: 'https://picsum.photos/50/50',
    title: 'something do it',
    time: '12:12:123456',
    hash: '12ds343g',
  },
];


class AboutCommit extends Component {
  render() {
    return (

      <div className="flex justify-content-between">
        <div className="flex">
          <Link to="/user"><img
            src={this.props.data.avatar}
            alt=""
            className="br-50"
          />
          </Link>
          <div className="flex flex-column justify-content-around">
            <Link to="/commit">{this.props.data.title}</Link>
            <span>{this.props.data.time}</span>
          </div>
        </div>
        <div>
          <Link
            to="/commit"
          ><Button>{this.props.data.hash}</Button>
          </Link>
        </div>
      </div>
    );
  }
}


class ListCommits extends Component {
  render() {
    const data = this.props.data;

    return (

      <div className="container pre-scrollable">
        <span> January 1, 2018</span>
        {data.map((item, index) => (<AboutCommit
          key={index}
          data={item}
        />))}
      </div>
    );
  }
}


class ListCommitsForm extends Component {
  render() {
    return (

      <div>
        <NavBarRepo />
        <div>
          <RepositoryTeam />
          <div className="border-dark">
            <span className="mr-2">Current branch:</span>
            <BranchDropdown />
            <ListCommits data={commits} />

          </div>
        </div>
      </div>
    );
  }
}


export { AboutCommit, ListCommitsForm };
