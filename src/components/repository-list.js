import React, {Component} from 'react';
import {TabContent, TabPane, Nav, NavItem, NavLink, Row, Col} from 'reactstrap';
import classnames from 'classnames';

class Example extends Component {
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
                            className={classnames({active: this.state.activeTab === '1'})}
                            onClick={() => {
                                this.toggle('1');
                            }}
                        >
                            Tab1
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({active: this.state.activeTab === '2'})}
                            onClick={() => {
                                this.toggle('2');
                            }}
                        >
                            Moar Tabs
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <RepoList repos={repoList}/>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <RepoList repos={repoListAuthors}/>
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}


export default Example;

class RepoListItem extends Component {
    render() {
        let {title, description, author} = this.props.item;
        return (
            <div>
                {author && <h2>{author}</h2>}
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        );
    }
}

class RepoList extends Component {
    render() {
        return (
            <div>
                {this.props.repos.map((item, key) => <RepoListItem item={item} key={key}/>)}
            </div>
        );
    }
}

const repoList = [
    {
        'title': 'Lorem',
        'description': 'Ipsum dolor sit amet',
    },
    {
        'title': 'Lorem',
        'description': 'Ipsum dolor sit amet',
    },
    {
        'title': 'Lorem',
        'description': 'Ipsum dolor sit amet',
    },
    {
        'title': 'Lorem',
        'description': 'Ipsum dolor sit amet',
    },
    {
        'title': 'Lorem',
        'description': 'Ipsum dolor sit amet',
    },
    {
        'title': 'Lorem',
        'description': 'Ipsum dolor sit amet',
    },
];
const repoListAuthors = [
    {
        'title': 'Lorem',
        'description': 'Ipsum dolor sit amet',
        'author': 'Dimasik',
    },
    {
        'title': 'Lorem',
        'description': 'Ipsum dolor sit amet',
        'author': 'Dimasik',
    },
    {
        'title': 'Lorem',
        'description': 'Ipsum dolor sit amet',
        'author': 'Dimasik',
    },
    {
        'title': 'Lorem',
        'description': 'Ipsum dolor sit amet',
        'author': 'Dimasik',
    },
    {
        'title': 'Lorem',
        'description': 'Ipsum dolor sit amet',
        'author': 'Dimasik',
    },
];

