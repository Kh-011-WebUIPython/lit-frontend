import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';

import LoadingPage from '../_components/loading-page';
import RepoList from './repo-list';

class RepoTabs extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: '0' };
  }

  toggle = tab => {
    this.setState({ activeTab: tab });
  };

  render() {
    const isFirstActive = this.state.activeTab === '0';

    if (!this.props.repos.owner) {
      return (<LoadingPage/>);
    }

    const { repos } = this.props;

    return (
      <div className="pb-2">
        <Nav tabs>

          <NavItem>
            <NavLink
              className={ isFirstActive ? 'active' : '' }
              onClick={ () => this.toggle('0') }
            >
              Owner
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              className={ !isFirstActive ? 'active' : '' }
              onClick={ () => this.toggle('1') }
            >
              Contributor
            </NavLink>
          </NavItem>

        </Nav>

        <TabContent activeTab={ this.state.activeTab }>

          <TabPane tabId="0" className="border border-top-0 p-2">
            <RepoList repos={ repos.owner }/>
          </TabPane>

          <TabPane tabId="1" className="border border-top-0 p-2">
            <RepoList repos={ repos.contributor }/>
          </TabPane>

        </TabContent>
      </div>
    );
  }
}

const mapStateToProps = state => ({ repos: state.userRepos });

const connectedRepoTabs = connect(mapStateToProps)(RepoTabs);

export default connectedRepoTabs;
