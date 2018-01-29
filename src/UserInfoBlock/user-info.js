import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardImg, CardTitle } from 'reactstrap';

import NavBar from './navbar';

const UserInfo = (props) => {
  const { avatar, username, signOut } = props;
  return (
    <div>
      <NavBar avatar={avatar} username={username} signOut={signOut} />
      <div className="d-none d-md-block card-300 mb-5 mb-md-4">
        <Card>
          <div className="card card-inverse">
            <div className="card-img-overlay">
              <div className="flex justify-content-between">
                <Link to="/settings">
                  <button type="button" className="btn btn-light btn-sm">Settings</button>
                </Link>
                <Link to="/">
                  <button type="button" onClick={signOut} className="btn btn-light btn-sm">Sign
                    out
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <CardImg top width="100%" src="https://picsum.photos/300/180?image=1045" alt="" />
          <CardBody>
            <Link to="/"><img
              src={avatar || 'https://picsum.photos/150/150'}
              alt="Avatar"
              className="br-50 w-150 h-150"
            />
            </Link>
            <CardTitle className="mb-0">{ username }</CardTitle>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default UserInfo;
