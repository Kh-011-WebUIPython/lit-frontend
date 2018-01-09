import React, {Component} from 'react';
import {connect} from "react-redux";
import {Redirect} from 'react-router-dom';
import CreateRepoForm from './form';
import {repoActions} from "../_actions";

class NewRepoPage extends Component {
    render() {
        const {alert, username} = this.props;
        const {repo} = this.props.repoCreation;

        if (repo) {
            this.props.clear();
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

const mapDispatchToProps = dispatch => {
    return ({
        clear: () => dispatch(repoActions.clearCreation()),
    });
}

const ConnectedNewRepoPage = connect(mapStateToProps, mapDispatchToProps)(NewRepoPage);

export default ConnectedNewRepoPage;