import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import NavBarRepo from "./navbar-repo";
import BranchDropdown from "./branch-dropdown";
import {Button} from 'reactstrap';

let commits = [
    {
        avatar: 'https://picsum.photos/30/30',
        title: 'something do it',
        time: '12:12:123456',
        hash: '12ds343g'
    },
    {
        avatar: 'https://picsum.photos/30/30',
        title: 'something do it',
        time: '12:12:123456',
        hash: '12ds343g'
    },
    {
        avatar: 'https://picsum.photos/30/30',
        title: 'something do it',
        time: '12:12:123456',
        hash: '12ds343g'
    },
    {
        avatar: 'https://picsum.photos/30/30',
        title: 'something do it',
        time: '12:12:123456',
        hash: '12ds343g'
    },
    {
        avatar: 'https://picsum.photos/30/30',
        title: 'something do it',
        time: '12:12:123456',
        hash: '12ds343g'
    },
    {
        avatar: 'https://picsum.photos/30/30',
        title: 'something do it',
        time: '12:12:123456',
        hash: '12ds343g'
    }
]


class AboutCommit extends Component {


    render() {


        return (

            <div>
                <div>
                    <img src={this.props.data.avatar} alt="" className="br-50"/>
                    <Link to='/commits'>{this.props.data.title}</Link>
                    <span>{this.props.data.time}</span>
                </div>
                <div>
                    <Button>{this.props.data.hash}</Button>
                </div>
            </div>
        );
    }
}


class ListCommits extends Component {


    render() {

        let data = this.props.data;

        return (

            <div>
                <span> January 1, 2018</span>
                {data.map((item, index) => <AboutCommit key={index}
                                                        data={item}/>
                )}
            </div>
        );
    }
}


class ListCommitsForm extends Component {


    render() {


        return (

            <div>
                <NavBarRepo/>
                <div>
                    <Link to='/repository'><h2 className="py-4">RepoName</h2>
                    </Link>
                    <div className="border-dark">
                        <span>Current branch:</span>
                        <BranchDropdown/>
                        <ListCommits data={commits}/>

                    </div>
                </div>
            </div>
        );
    }
}


export default ListCommitsForm;