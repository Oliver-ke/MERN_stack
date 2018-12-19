import React, { Component } from 'react';
import AppNavBar from './components/AppNavBar';
import ShoppingList from './components/ShoppingList';
import ItemModal from './components/ItemMotor';
import {Provider} from 'react-redux';
import store from './redux/store'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container} from 'reactstrap'
class App extends Component {
  render() {
    return (
     <Provider store={store}>
       <div className="App">
        <AppNavBar />
        <Container>
          <ItemModal />
          <ShoppingList />
        </Container>
      </div>
     </Provider>
    );
  }
}

export default App;
