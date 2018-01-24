import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import Search from './search';
import UserInfo from '../UserInfoBlock/user-info';

const UserInfoBlock = (props) => {
  const { avatar, username, signOut } = props;
  return (
    <aside className="flex flex-column w-300 w-md-100vw p-3 s-dark">
      <Search />
      <UserInfo username={username} avatar={avatar} signOut={signOut} />
      <Link to="/create">
        <Button color="primary" className="w-100">Create a new repo</Button>
      </Link>
    </aside>
  );
};

export default UserInfoBlock;
