import React, {Component} from 'react';
import {
    ListGroup, ListGroupItem, Nav, NavItem, NavLink, TabContent,
    TabPane
} from 'reactstrap';
import {Link} from 'react-router-dom';
import classnames from 'classnames';

let users = [
    {username: 'Jane Dou'},
    {username: 'Jane Dou'},
    {username: 'Jane Dou'},
    {username: 'Jane Dou'},
    {username: 'Jane Dou'}]

let repositories = [
    {title: 'RepoName'},
    {title: 'RepoName'},
    {title: 'RepoName'},
    {title: 'RepoName'},
    {title: 'RepoName'}]

class SearchForm extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
        return (
            <div>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames(
                                {active: this.state.activeTab === '1'})}
                            onClick={() => {
                                this.toggle('1');
                            }}
                        >
                            By username
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames(
                                {active: this.state.activeTab === '2'}) + " "}
                            onClick={() => {
                                this.toggle('2');
                            }}
                        >
                            By name of repository
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        {users.map((item) => <ListGroup key={item.username}>
                                <ListGroupItem><Link
                                    to="/user">{item.username}</Link></ListGroupItem>
                            </ListGroup>
                        )}
                    </TabPane>
                    <TabPane tabId="2">
                        {repositories.map(
                            (item) => <ListGroup key={item.title}>
                                <ListGroupItem><Link
                                    to="/user">{item.title}</Link></ListGroupItem>
                            </ListGroup>
                        )}
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}

export default SearchForm;