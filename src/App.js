import React, { PureComponent } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './common/header'
import store from './store'
import Home from './pages/home'
import Detail from './pages/detail'
import Login from './pages/login';
import { Provider } from 'react-redux'

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>
        <Provider store = {store}>
          <BrowserRouter>
            <Header/>
            <Route path='/' exact component={Home}></Route>
            <Route path='/login' exact component={Login}></Route>
            <Route path='/detail/:id' exact component={Detail}></Route>
          </BrowserRouter>
        </Provider>
      </div>  
    );
  }
}
 
export default App;