import React, {Component} from 'react';
import RepoTabs from './repo-tabs';
import Page from '../_components/page';
import {connect} from 'react-redux';
import {userActions, userpageActions} from '../_actions';

class UserPage extends Component {
    componentDidMount() {
        this.props.getUserInfo();
    };

    render() {
        return (
            <Page {...this.props}>
                <RepoTabs/>
            </Page>
        );
    };
}

const mapStateToProps = state => {
    return {
        ...state.userinfo
    };
};

const mapDispatchToProps = dispatch => {
    return {
        signOut: () => {
            dispatch(userActions.signOut())
        },
        getUserInfo: () => {
            dispatch(userpageActions.getUserInfo());
        }
    }
};

const ConnectedUserPage = connect(mapStateToProps, mapDispatchToProps)(UserPage);

export default ConnectedUserPage;