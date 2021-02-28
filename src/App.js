import React, { Component } from 'react';
import Header from './common/header'
import store from './store'
import { Provider } from 'react-redux'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>
        <Provider store = {store}>
          <Header/>
        </Provider>
      </div>  
    );
  }
}
 
export default App;