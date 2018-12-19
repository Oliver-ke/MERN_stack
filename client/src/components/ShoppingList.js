import React, {Component} from 'react';
import {Container,
        ListGroup,
        ListGroupItem,
        Button} from 'reactstrap';

import {CSSTransition,
        TransitionGroup} from 'react-transition-group';
import {connect} from 'react-redux';
import {getItems, deleteItem} from '../redux/action/itemAction';
import PropTypes from 'prop-types'

class ShoppingList extends Component{
    //state was removed in order to utilize rdeux
    componentDidMount(){
        this.props.getItems();
    }
    onDeleteClick = (id) =>{
        this.props.deleteItem(id);
    }
    render(){
        const {items} = this.props.item;
        return(
            <Container>
                {/* <Button
                    color="dark"
                    style={{marginBottom: '2rem'}}
                    onClick={()=>{
                        const name = prompt('Enter Item');
                        if(name){
                            this.setState(state =>({
                                items:[...state.items,{id: uuid(), name:name}]
                            }));
                        }
                    }}>Add Item</Button> */}
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {items.map(({ _id,name})=>{
                           return(
                            <CSSTransition key={ _id} timeout={500} classNames="fade">
                            <ListGroupItem>
                                <Button
                                  className="remove-btn"
                                  color="danger"
                                  size="sm"
                                  onClick={this.onDeleteClick.bind(this, _id)}
                                >&times;</Button>
                                {name}
                            </ListGroupItem>
                            </CSSTransition>
                           )
                        })}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}

ShoppingList.proptypes = {
    getItems: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) =>{
   return {item: state.item} 
}

export default connect(mapStateToProps,{getItems, deleteItem})(ShoppingList);