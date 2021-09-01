import React, { Component } from "react";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";



class SimplePopover extends Component {
  constructor() {    
    super();    
    this.state = {      
      name: "React",      
      popoverOpen: false    
    };
    this.togglePopover = this.togglePopover.bind(this);

  }


togglePopover() {    
  this.setState({ popoverOpen: !this.state.popoverOpen })  
}

render() {
    const { popoverOpen } = this.state;

    return (
        
      <div>
        <Button className="btn-danger btn-sm" id="mypopover" type="button ">
          Read Me First !!
        </Button>
        <Popover
          placement="bottom"
          isOpen={popoverOpen}
          target="mypopover"
          toggle={this.togglePopover}
        >
          <PopoverHeader>Read this carefully</PopoverHeader>
          <PopoverBody>
            After submitting order, the user has up to three(3) days to dissapprove the product 
            otherwise , no complaint can be made again. Go here below the Customer Reviews on the HomePage <a href="/" class="btn btn-sm btn-primary">
            If you want disapprove the Product.
          </a> 
          </PopoverBody>
        </Popover>
      </div>
    );
  }
}

export default SimplePopover;