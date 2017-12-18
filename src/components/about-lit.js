import React, {Component} from 'react';

class AboutLit extends Component {
    render() {
        return (
            <section className="s-dark p-5">
                <div className="container pb-4">
                    <h1 className="display-4 pb-2">About LIT</h1>
                    <p>The project “LIT” is a version control system.
                        Project tracks all changes in local files and compares these files
                        with files stored on the remote server. Basically “LIT” can be
                        used as source code management, but you can store any files you
                        want.</p>
                </div>
            </section>
        );
    }
}

export default AboutLit;