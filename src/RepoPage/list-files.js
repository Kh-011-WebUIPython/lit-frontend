import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';


const ListFoldersFiles = props => (
  <ListGroupItem className="mt-2">
    <Link to="#">{ props.title }</Link>
  </ListGroupItem>
);

const ListFiles = () => {
  const files = [
    {
      title: 'public',
    },
    {
      title: 'src',
    },
    {
      title: 'README.md',
    },
  ];

  return (
    <ListGroup className="container pre-scrollable mb-2 pr-0">
      { files.map(item => (<ListFoldersFiles
        key={item.title}
        title={item.title}
      />)) }
    </ListGroup>
  );
};

export default ListFiles;
