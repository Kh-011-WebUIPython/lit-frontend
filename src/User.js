import React, {Component} from 'react';
import Search from './components/search'
import Content from "./components/content";

class User extends Component {
    render() {
        return (
            <div className="User">
                <section className="do-smth-grt"></section>
                <Search/>
                <Content/>
            </div>
        );
    }
}

export default User;