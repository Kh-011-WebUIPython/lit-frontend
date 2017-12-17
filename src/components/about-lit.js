import React, {Component} from 'react';

class AboutLit extends Component {
    render() {
        return (
            <div className="flex-column justify-content-between">
                <div className="flex flex-column">
                    <h1 className="display-4 text-dark m-1">About LIT</h1>
                    <p className="display-8 text-dark">The project “LIT” is a version control system. Project tracks all changes in local files and compares these files with files stored on the remote server. Basically “LIT” can be used as source code management, but you can store any files you want. </p>
                </div>
            </div>
        );
    }
}

export default AboutLit;