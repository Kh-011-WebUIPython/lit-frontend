import React from 'react';
import { Button, Popover, Input, PopoverHeader, PopoverBody } from 'reactstrap';

export default class CloneLink extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false,
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen,
    });
  }

  handleFocus = (event) => {
    event.target.select();
  };

  render() {
    return (
      <div className="d-inline-block mr-2">
        <Button id="Popover1" onClick={this.toggle}>
          Clone
        </Button>
        <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
          <PopoverBody>
            <Input
              type="text"
              onFocus={this.handleFocus}
              value={`http://litvcs.win/repositories/${this.props.id}`}
            />
          </PopoverBody>
        </Popover>
      </div>
    );
  }
}