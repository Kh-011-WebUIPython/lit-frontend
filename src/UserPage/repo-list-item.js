import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Author from './author';

const RepoListItem = ({
  name, user, author, description,
}) => (
  <div className="border p-2 pl-3 pb-3 mt-2">
    <div className="flex justify-content-between">
      <h2><Link to={`/${author || user}/${name}`}>{ name }</Link></h2>
      { author && <Author>{ author }</Author> }
    </div>
    <p>{ description }</p>
  </div>
);

const mapStateToProps = state => ({ user: state.user.username });

export default connect(mapStateToProps)(RepoListItem);
