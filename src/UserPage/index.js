import React, {Component} from 'react';
import RepoTabs from './repo-tabs';
import Page from '../_components/page';

class UserPage extends Component {
    render() {
        return (
            <Page>
                <RepoTabs/>
            </Page>
        );
    };
}

export default UserPage;