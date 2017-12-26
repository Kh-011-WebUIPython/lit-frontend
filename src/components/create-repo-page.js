import React, {Component} from 'react';
import CreateRepoForm from './create-repo-form';
import Page from './page';

const NewRepository = props => {
    return (
        <Page>
            <h1 className="display-4 pb-2">Create a new repository</h1>
            <CreateRepoForm/>
        </Page>
    );
}

export default NewRepository;