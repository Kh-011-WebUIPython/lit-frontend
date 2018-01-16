import React, {Component} from "react";
import LoadingPage from '../_components/loading-page';
import {Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap';
import RepoList from './repo-list';
import {connect} from 'react-redux';

class RepoTabs extends Component {
    toggle = tab => {
        this.setState({activeTab: tab});

    };

    constructor(props) {
        super(props);

        this.state = {activeTab: '0'};
    }

    render() {
        const isFirstActive = this.state.activeTab === '0';

        if (!this.props.repos.owner) {
            return (<LoadingPage/>);
        }

        return (
            <div>
                <Nav tabs>
                    <NavItem>
                        <NavLink className={isFirstActive ? 'active' : ''} onClick={() => {
                            this.toggle('0');
                        }}>
                            User's repositories
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={!isFirstActive ? 'active' : ''} onClick={() => {
                            this.toggle('1');
                        }}>
                            Repositories user contribute to
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="0" className="border border-top-0 p-2">
                        <RepoList repos={this.props.repos.owner}/>
                    </TabPane>
                    <TabPane tabId="1" className="border border-top-0 p-2">
                        <RepoList repos={this.props.repos.contributor}/>
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        repos: state.repos,
    };
};

export default connect(mapStateToProps)(RepoTabs);
