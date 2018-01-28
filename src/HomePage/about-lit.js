import React from 'react';

const AboutLit = () => {
    return (
        <section className="s-dark p-5">
            <div className="container pb-4 text-about">
                <h1 className="display-4 pb-2">About LIT</h1>
                <p className="text-justify">“LIT” is a version control system. It tracks all changes in
                    local files and compares these files with files stored on
                    the remote server. Developers can manage the versions of the
                    project. Basically “LIT” can be used as source code
                    management, but you can store any files you want. The system
                    “LIT” makes possible for team to collaborate in the
                    development of the project. Since this is an open system,
                    every user can view pages of other users and their
                    repositories.
                </p>
            </div>
        </section>
    );
}

export default AboutLit;