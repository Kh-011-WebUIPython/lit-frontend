import React from 'react';
import { Link } from 'react-router-dom';
import Team from './team';

const RepositoryTeam = () => (
  <div>
    <Link to="/repository">
      <h2 className="pt-4">RepoName</h2>
    </Link>
    <Team />
  </div>
);

export default RepositoryTeam;
