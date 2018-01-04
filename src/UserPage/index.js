import React, {Component} from 'react';
import RepoTabs from './repo-tabs';
import Page from '../_components/page';
import {connect} from 'react-redux';
import {userpageActions} from '../_actions/userpage.actions';

class UserPage extends Component {
    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(userpageActions.getUserInfo());
    }

    render() {
        return (
            <Page>
                <RepoTabs/>
            </Page>
        );
    }
}

const ConnectedUserPage = connect()(UserPage);

export default ConnectedUserPage;