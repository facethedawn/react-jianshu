import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { actionCreators } from './store'
import { 
  LoginBox, 
  LoginWrapper,
  Input,
  Button 
} from './style'

class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    console.log(this.props.loginState); 

    if(!this.props.loginState) {
      return ( 
        <LoginWrapper>
        <LoginBox>
          <Input placeholder='insert username' ref={(input)=> {this.inputUsername = input}} type='text'></Input>
          <Input placeholder='insert password' ref={(input)=> {this.inputPassword = input}} type='password'></Input>
          <Button onClick={() => this.props.login(this.inputUsername, this.inputPassword)}>Button</Button>
        </LoginBox>
      </LoginWrapper>
      );
      
    }else {
      return <Redirect to='/'></Redirect>
    }
  }
}

const mapStateToProps = state => {
  return {
    loginState: state.getIn(['login','login'])
  }
}

const mapDistpatchToProps = dispatch => {
  return {
    login(username, password) {
      dispatch(actionCreators.loginGetdata(username.value, password.value))
    }
  }
}
 
export default connect(mapStateToProps, mapDistpatchToProps)(Login);