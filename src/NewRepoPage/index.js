import React, {Component} from 'react';
import {connect} from "react-redux";
import {Redirect} from 'react-router-dom';
import CreateRepoForm from './form';

class NewRepoPage extends Component {
    render() {
        const {alert, username} = this.props;
        const {repo} = this.props.repoCreation;

        if (repo) {
            return <Redirect to={`/${username}/${repo.name}/empty`} push={true}/>
        }

        return (
            <CreateRepoForm alert={alert}/>
        );
    };
}

const mapStateToProps = state => {
    return {
        username: state.userinfo.username, alert: state.alert, repoCreation: state.repoCreation
    };
};

const ConnectedNewRepoPage = connect(mapStateToProps)(NewRepoPage);

export default ConnectedNewRepoPage;