import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import NavBarRepo from './navbar-repo';
import BranchDropdown from './branch-dropdown';
import RepositoryTeam from './repo-team';
import handshake from '../_img/handshake.svg';

class OpenPullRequestForm extends Component {
  render() {
    return (

      <div className="container-scroll">
        <NavBarRepo />
        <div>
          <RepositoryTeam />
          <div className="border-dark">
            <div className="flex justify-content-around">
              <div className="flex flex-column align-items-center justify-content-center">
                <span className="mb-2">First branch:</span>
                <BranchDropdown />
              </div>
              <img
                src={handshake}
                alt="handshake"
                className="handshake-4"
              />
              <div className="flex flex-column align-items-center justify-content-center">
                <span className="mb-2">Second branch:</span>
                <BranchDropdown />
              </div>
            </div>
            <Form>
              <FormGroup>
                <Label className="h5 py-4">Write a description for pull
                                    request
                </Label>
                <Input
                  name="description"
                  type="textarea"
                  onChange={this.handleInputChange}
                />
              </FormGroup>
              <Link to="/open_pull_request">
                <Button color="primary">Open pull request</Button>
              </Link>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}


export default OpenPullRequestForm;
