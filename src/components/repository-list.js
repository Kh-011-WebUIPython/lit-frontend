import React, {Component} from 'react';
import {
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    Row,
    Col,
    Card,
    Button,
    CardHeader,
    CardFooter,
    CardBody,
    CardTitle,
    CardText
} from 'reactstrap';
import classnames from 'classnames';
import {Link} from 'react-router-dom';
import crown from '../img/crown.svg';

class RepoTabs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTab: '1'
        };
    }

    toggle = (tab) => {
        if (this.state.activeTab !== tab) {
            this.setState({activeTab: tab});
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
                            }}>
                            User's repositories
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({active: this.state.activeTab === '2'})}
                            onClick={() => {
                                this.toggle('2');
                            }}>
                            Repositories user contribute to
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1" className="border border-top-0 p-2">
                        <RepoList repos={repoList}/>
                    </TabPane>
                    <TabPane tabId="2" className="border border-top-0 p-2">
                        <RepoList repos={repoListAuthors}/>
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}


export default RepoTabs;

class RepoListItem extends Component {
    render() {
        let {title, description, author} = this.props.item;
        return (
            <div className="border p-2 pl-3 pb-3 mt-2">
                <div className="flex justify-content-between">
                    <h2><Link to='/#'>{title}</Link></h2>
                    {author && <Author>{author}</Author>}
                </div>
                <p>{description}</p>
            </div>
        );
    }
}

const RepoList = props => {
    return (
        <div>
            {props.repos.map((item, key) => <RepoListItem item={item} key={key}/>)}
        </div>
    );
}


const Author = props => {
    return (
        <div className="flex align-items-center">
            <img src={crown} className="img-2"/>
            <h5><Link to={`/${props.children}`}>{props.children}</Link></h5>
        </div>
    );
}

// DATA

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

