import React from 'react';
import RepoTabs from './repository-list'
import Page from './page';

const UserPage = props => {
    return (
        <Page>
            <RepoTabs/>
        </Page>
    );
}


export default UserPage;