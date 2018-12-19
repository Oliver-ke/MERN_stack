import React, { Component } from 'react'
import{
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import uuid from 'uuid';
import {connect} from 'react-redux';
import {addItem} from '../redux/action/itemAction';


// A container is a term react component that uses redux for state management
 class ItemModal extends Component {
     state = {
         modal: false,
         name: ''
     }
     toggle = () =>{
         this.setState({modal: !this.state.modal});
     }
     onChange = (e) =>{
         // this is easier so we can use this event handle for any input
         // where the name maps to the same name of that of the object
        this.setState({[e.target.name]: e.target.value});
     }
     onSubmit = (e) =>{
         e.preventDefault();
         const newItem = {
            name: this.state.name
         }
         //add item via add item action
         this.props.addItem(newItem);

         //close modal 
         //this.setState({modal: false});
         this.toggle();
     }
  render() {
    return (
      <div>
        <Button
        color='dark'
        style={{marginBottom: '2rem'}}
        onClick={this.toggle}
        >Add Item</Button>

        <Modal 
        isOpen={this.state.modal}
        toggle={this.toggle}
        >
        <ModalHeader toggle={this.toggle}>
            Add to Shooping List
        </ModalHeader>
        <ModalBody>
            <Form onSubmit={this.onSubmit}>
                <FormGroup>
                    <Label for='item'>Item</Label>
                    <Input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Add Shoping Item"
                    onChange={this.onChange}
                    >
                    </Input>
                    <Button
                    color="dark"
                    style={{marginTop: "2rem"}}
                    block
                    >
                    Add Item
                    </Button>
                </FormGroup>
            </Form>
        </ModalBody>
        </Modal>
      </div>
    )
  }
}
const mapStateToProps = (state) =>({
    items: state.item
})
export default connect(mapStateToProps,{addItem})(ItemModal)