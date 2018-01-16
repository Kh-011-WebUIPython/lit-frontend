import React from 'react';
import Code from '../_components/code';

const EmptyRepoPage = (props) => {
  const repoName = props.location.pathname.split('/')[2];

  return (
    <div>
      <h2 className="pb-4">{ repoName }</h2>
      <ul className="list-unstyled">
        <li>
          <h4 className="pb-3">Don't know what to do next? We can help you!</h4>
          <h5 className="mb-2">1. You can create a new repository from command line:</h5>
          <Code>lit init</Code>
          <Code>lit add file_name</Code>
          <Code>lit commit -m "Your commit for commit"</Code>
          <Code>lit remote add origin https://litvcs.win/lit-project1.git</Code>
          <Code>lit push -u origin master</Code>
        </li>
        <li>
          <h5 className="mt-4 mb-2">2. Or you can push already existing project</h5>
          <Code>lit remote add origin https://litvcs.win/lit-project1.git</Code>
          <Code>lit push -u origin master</Code>
        </li>
      </ul>
    </div>
  );
};

export default EmptyRepoPage;
