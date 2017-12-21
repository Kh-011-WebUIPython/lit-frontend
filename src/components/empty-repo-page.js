import React, {Component} from 'react';
import EmptyRepoForm from './empty-repo-form';
import Page from './page';

const EmptyRepoPage = props => {
    return (
        <Page>
            <EmptyRepoForm/>
        </Page>
    );
}

export default EmptyRepoPage;