import React from 'react';
import RepositorySettingsForm from './repo-settings-form';
import Page from './page';
import NavBarRepo from "./navbar-repo";

const RepositorySettings = props => {
    return (
        <Page>
            <div>
                <NavBarRepo/>
                <h3 className="display-4 pb-2">Update a repository</h3>
                <RepositorySettingsForm/>
            </div>
        </Page>
    );
}

export default RepositorySettings;