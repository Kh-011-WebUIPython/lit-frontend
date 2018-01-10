import React, {Component} from 'react';
import RepoTabs from './repo-tabs';
import {connect} from "react-redux";
import {repoActions} from "../_actions";
import LoadingPage from "../_components/loading-page";

class UserPage extends Component {
    componentDidMount() {
        const {id} = this.props.userinfo;
        this.props.getRepos(id);
    }
    render() {
        console.log(this.props);
        if (this.props.userinfo.fetchingUserinfo || this.props.repos.fetchingRepos) {
            return (<LoadingPage/>)
        } else {
            const {signOut, repos} = this.props;
            return (<RepoTabs repos={repos}/>);
        }
    };
}

const mapStateToProps = state => {
    return {
        userinfo: state.userinfo, repos: state.repos,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getRepos: (id) => {
            dispatch(repoActions.getByUser(id))
        }
    }
};

const ConnectedUserPage = connect(mapStateToProps, mapDispatchToProps)(UserPage);

export default ConnectedUserPage;