import React, {Component} from "react";
import LoadingPage from '../_components/loading-page';
import {Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap';
import RepoList from './repo-list';
import Author from './author';
import {Link} from 'react-router-dom';

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

        if (!this.props.repos.owner) {
            return (<LoadingPage/>);
        }

        const {owner, contributor} = this.props.repos;
        // return(<div>{owner.map(x => <h1>{x.name}</h1>)}</div>);
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
                        {/*{owner.map((item, key) => <RepoListItem item={item} key={key}/>)}*/}
                        {owner.map((item, key) => (
                            <div className="border p-2 pl-3 pb-3 mt-2">
                                <div className="flex justify-content-between">
                                    <h2><Link to='/#'>{item.name}</Link></h2>
                                    {item.author && <Author>{item.author}</Author>}
                                </div>
                                <p>{item.description}</p>
                            </div>
                        ))}
                        {/*<RepoList repos={owner}/>*/}
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
