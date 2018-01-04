import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Code from './code'

class EmptyRepoForm extends Component {
    clickInput = () => {
        this.refs.file_upload.click()
    }

    render() {
        return (
            <div>
                <Link to='/User'><h2 className="py-4">RepoName</h2></Link>
                <ul className="list-unstyled">
                    <li>
                        <h4 className="pb-3">You think now what you can do? We
                            can help you!</h4>
                        <h5 className="mb-2">1. You can create a new repository
                            from command line:</h5>
                        <Code>lit init</Code>
                        <Code>lit add file_name</Code>
                        <Code>lit commit -m "Your commit for commit"</Code>
                        <Code>lit remote add origin
                            https://litvcs.win/lit-project1.git</Code>
                        <Code>lit push -u origin master</Code>
                    </li>
                    <li>
                        <h5 className="mt-4 mb-2">2. Or you can push already
                            existing project</h5>
                        <Code>lit remote add origin
                            https://litvcs.win/lit-project1.git</Code>
                        <Code>lit push -u origin master</Code>
                    </li>
                    <li>
                        <h5 className="mt-4 mb-2">3. Or load files by pressing a
                            button like smoothey-dev</h5>
                        <button className="btn btn-primary"
                                onClick={this.clickInput}>Upload files
                        </button>
                        <input type="file" className="file-upload"
                               ref="file_upload"/>
                    </li>
                </ul>

            </div>
        );
    }
}

export default EmptyRepoForm;