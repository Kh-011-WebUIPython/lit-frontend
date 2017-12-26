import React, {Component} from 'react';
import UserSettingsForm from './user-settings-form';
import Page from './page';

const UserSettingsPage = props => {
    return (
        <Page>
            <UserSettingsForm/>
        </Page>
    );
}

export default UserSettingsPage;