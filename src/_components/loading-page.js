import React from 'react';
import { connect } from 'react-redux';

const LoadingPage = (props) => {
  const fetching = props.userinfo.fetchingUserinfo || props.repos.fetchingRepos;
  return (
    fetching
      ? <div className="flex w-100vw h-100vh justify-content-center align-items-center">
        <h1>Loading...</h1>
      </div>
      : ''
  );
};

const mapStateToProps = state => ({ userinfo: state.userinfo, repos: state.repos });

const ConnectedLoadingPage = connect(mapStateToProps)(LoadingPage);

export default ConnectedLoadingPage;
