import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
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
          <BrowserRouter>
            <Route path='/' exact render={()=>(<div>home</div>)}></Route>
            <Route path='/detail' exact render={()=>(<div>detail</div>)}></Route>
          </BrowserRouter>
        </Provider>
      </div>  
    );
  }
}
 
export default App;