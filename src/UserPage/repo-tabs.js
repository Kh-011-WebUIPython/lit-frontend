import React, {Component} from "react";
import {Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap';
import RepoList from './repo-list';
import LoadingPage from '../_components/loading-page';

class RepoTabs extends Component {
    toggle = tab => {
        this.setState({
            activeTab: tab,
        });

    };

    constructor(props) {
        super(props);

        this.state = {
            activeTab: '0'
        };
    }

    render() {
        const isFirstActive = this.state.activeTab === '0';

        if (!this.props.repos) {
            return(<LoadingPage/>);
        }

        const {owner, contributor} = this.props.repos;
        console.log(owner);
        return (
            <div>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={isFirstActive ? 'active' : ''}
                            onClick={() => {
                                this.toggle('0');
                            }}>
                            User's repositories
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={!isFirstActive ? 'active' : ''}
                            onClick={() => {
                                this.toggle('1');
                            }}>
                            Repositories user contribute to
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="0" className="border border-top-0 p-2">
                        <RepoList repos={owner}/>
                    </TabPane>
                    <TabPane tabId="1" className="border border-top-0 p-2">
                        <RepoList repos={contributor}/>
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}


export default RepoTabs;


// const repoList = [
//     {
//         'title': 'Lorem',
//         'description': 'Ipsum dolor sit amet',
//     },
//     {
//         'title': 'Lorem',
//         'description': 'Ipsum dolor sit amet',
//     },
//     {
//         'title': 'Lorem',
//         'description': 'Ipsum dolor sit amet',
//     },
//     {
//         'title': 'Lorem',
//         'description': 'Ipsum dolor sit amet',
//     },
//     {
//         'title': 'Lorem',
//         'description': 'Ipsum dolor sit amet',
//     },
//     {
//         'title': 'Lorem',
//         'description': 'Ipsum dolor sit amet',
//     },
// ];
// const repoListAuthors = [
//     {
//         'title': 'Lorem',
//         'description': 'Ipsum dolor sit amet',
//         'author': 'Dimasik',
//     },
//     {
//         'title': 'Lorem',
//         'description': 'Ipsum dolor sit amet',
//         'author': 'Dimasik',
//     },
//     {
//         'title': 'Lorem',
//         'description': 'Ipsum dolor sit amet',
//         'author': 'Dimasik',
//     },
//     {
//         'title': 'Lorem',
//         'description': 'Ipsum dolor sit amet',
//         'author': 'Dimasik',
//     },
//     {
//         'title': 'Lorem',
//         'description': 'Ipsum dolor sit amet',
//         'author': 'Dimasik',
//     },
// ];
//
