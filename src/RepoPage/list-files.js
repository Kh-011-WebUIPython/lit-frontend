import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';
import {Link} from 'react-router-dom';


const ListFoldersFiles = (props) => {
    return (
        <ListGroupItem className="mt-2">
            <Link
                to='/repository'>{props.title}</Link>
        </ListGroupItem>
    );
};

class ListFiles extends Component {
    render() {
        let files = [
            {
                title: 'public'
            },
            {
                title: 'src'
            },
            {
                title: 'README.md'
            },
        ];

        return (
            <ListGroup className="container pre-scrollable">
                {files.map((item) => <ListFoldersFiles key={item.title}
                                                              title={item.title}/>
                )}
            </ListGroup>
        );
    }
}

export default ListFiles;