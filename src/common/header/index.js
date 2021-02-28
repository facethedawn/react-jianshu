import React from 'react';
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { CSSTransition } from 'react-transition-group'
import { 
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  Addition,
  Button 
} from './style'

const Header = (props) => {
  return ( 
    <div>
      <HeaderWrapper>
        <Logo/>
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          <NavItem className='right'>登录</NavItem>
          <NavItem className='right'>
            <span className='iconfont'>&#xe6d0;</span>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in = {props.focused}
              timeout = {200}  
              classNames = "slide"
            >
              <NavSearch
                className = {props.focused ? 'focused': ''}
                onFocus = {props.handleInputFocus}
                onBlur = {props.handleInputBlur}
              >
              </NavSearch>
            </CSSTransition>
            <span className = {props.focused ? 'focused iconfont': 'iconfont'}>&#xe6e0;</span>
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className='writting'>
            <span className='iconfont'>&#xe6dc;</span>写文章
          </Button>
          <Button className='reg'>注册</Button>
        </Addition>
      </HeaderWrapper>
    </div>
   );
}

const mapStateToProps = (state) => {
  console.log(state.header);
  return {
    focused: state.getIn(['header','focused'])
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    handleInputFocus() {
      const action = actionCreators.searchFocus()
      dispatch(action)
    },
    handleInputBlur() {
      const action = actionCreators.searchBlur()
      dispatch(action)
    }
  }
}
 
export default connect(mapStateToProps, mapDispathToProps)(Header); 