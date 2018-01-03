import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';
import {Link} from 'react-router-dom';


const ListFoldersFiles = (props) => {
    return (
        <ListGroupItem>
            <Link
                to='/repository'>{props.title}</Link>
        </ListGroupItem>
    );
};

class ListFiles extends Component {
    render() {

        let files = [
            {
                title: 'folder1'
            },
            {
                title: 'folder2'
            },
            {
                title: 'folder3'
            },
            {
                title: 'folder4'
            },
            {
                title: 'folder5'
            },
            {
                title: 'folder6'
            },
            {
                title: 'file1'
            },
            {
                title: 'file2'
            },
            {
                title: 'file3'
            },
            {
                title: 'file4'
            }
        ]

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