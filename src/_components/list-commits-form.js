import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import NavBarRepo from "./navbar-repo";
import BranchDropdown from "./branch-dropdown";
import {Button} from 'reactstrap';

let commits = [
    {
        avatar: 'https://picsum.photos/50/50',
        title: 'something do it',
        time: '12:12:123456',
        hash: '12ds343g'
    },
    {
        avatar: 'https://picsum.photos/50/50',
        title: 'something do it',
        time: '12:12:123456',
        hash: '12ds343g'
    },
    {
        avatar: 'https://picsum.photos/50/50',
        title: 'something do it',
        time: '12:12:123456',
        hash: '12ds343g'
    },
    {
        avatar: 'https://picsum.photos/50/50',
        title: 'something do it',
        time: '12:12:123456',
        hash: '12ds343g'
    },
    {
        avatar: 'https://picsum.photos/50/50',
        title: 'something do it',
        time: '12:12:123456',
        hash: '12ds343g'
    },
    {
        avatar: 'https://picsum.photos/50/50',
        title: 'something do it',
        time: '12:12:123456',
        hash: '12ds343g'
    },
    {
        avatar: 'https://picsum.photos/50/50',
        title: 'something do it',
        time: '12:12:123456',
        hash: '12ds343g'
    },
    {
        avatar: 'https://picsum.photos/50/50',
        title: 'something do it',
        time: '12:12:123456',
        hash: '12ds343g'
    }
]


class AboutCommit extends Component {


    render() {


        return (

            <div className="flex justify-content-between">
                <div className="flex">
                    <img src={this.props.data.avatar} alt="" className="br-50"/>
                    <div className="flex flex-column justify-content-around">
                        <Link to='/commits'>{this.props.data.title}</Link>
                        <span>{this.props.data.time}</span>
                    </div>
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

            <div className="container pre-scrollable">
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
                        <span className="mr-2">Current branch:</span>
                        <BranchDropdown/>
                        <ListCommits data={commits}/>

                    </div>
                </div>
            </div>
        );
    }
}


export default ListCommitsForm;