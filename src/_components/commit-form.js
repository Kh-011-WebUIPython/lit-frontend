import React, {Component} from 'react';
import NavBarRepo from './navbar-repo';
import RepositoryTeam from './repo-team';
import {AboutCommit} from './list-commits-form';
import ListFiles from './list-files';

let commit = [
    {
        avatar: 'https://picsum.photos/50/50',
        title: 'something do it',
        time: '12:12:123456',
        hash: '12ds343g'
    }]

class CommitForm extends Component {


    render() {

        return (

            <div>
                <NavBarRepo/>
                <div>
                    <RepositoryTeam/>
                    <div className="border-dark">
                        {commit.map((item, index) => <AboutCommit key={index}
                                                                data={item}/>
                        )}
                        <ListFiles/>
                    </div>
                </div>
            </div>
        );
    }
}


export default CommitForm;