import React, { Component } from 'react';
import Header from './common/header'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>
        <Header/>
      </div>  
    );
  }
}
 
export default App;