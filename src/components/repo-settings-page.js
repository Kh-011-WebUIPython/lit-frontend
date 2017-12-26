import React, {Component} from 'react';
import RepositorySettingsForm from './repo-settings-form';
import Page from './page';

const RepositorySettings = props => {
    return (
        <Page>
            <h1 className="display-4 pb-2">Update a repository</h1>
            <RepositorySettingsForm/>
        </Page>
    );
}

export default RepositorySettings;