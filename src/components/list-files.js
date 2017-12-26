import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';
import {Link} from 'react-router-dom';

class ListFiles extends Component {
    render() {
        return (
            <ListGroup>
                <ListGroupItem><Link
                    to='/repository'>Folder1</Link></ListGroupItem>
                <ListGroupItem><Link
                    to='/repository'>Folder2</Link></ListGroupItem>
                <ListGroupItem><Link
                    to='/repository'>Folder3</Link></ListGroupItem>
                <ListGroupItem><Link
                    to='/repository'>File1</Link></ListGroupItem>
                <ListGroupItem><Link
                    to='/repository'>File2</Link></ListGroupItem>
                <ListGroupItem><Link
                    to='/repository'>File3</Link></ListGroupItem>
                <ListGroupItem><Link
                    to='/repository'>File4</Link></ListGroupItem>
                <ListGroupItem><Link
                    to='/repository'>File5</Link></ListGroupItem>
                <ListGroupItem><Link
                    to='/repository'>File6</Link></ListGroupItem>
            </ListGroup>
        );
    }
}

export default ListFiles;