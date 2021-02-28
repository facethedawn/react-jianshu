import React, { Component } from 'react';
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
  Button,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList 
} from './style'

class Header extends Component {
  render() {
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
                in = {this.props.focused}
                timeout = {200}  
                classNames = "slide"
              >
                <NavSearch
                  className = {this.props.focused ? 'focused': ''}
                  onFocus = {this.props.handleInputFocus}
                  onBlur = {this.props.handleInputBlur}
                >
                </NavSearch>
              </CSSTransition>
              <span className = {this.props.focused ? 'focused iconfont': 'iconfont'}>&#xe6e0;</span>
              {this.getListArea()}
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

  getListArea (){
    if (this.props.focused) {
      return (
        <SearchInfo>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch>换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {
              this.props.list.map((item, index) => {
                return(
                  <SearchInfoItem key={index}>{item}</SearchInfoItem>
                )
              })
            }
            {/* <SearchInfoItem>教育</SearchInfoItem>
            <SearchInfoItem>教育</SearchInfoItem>
            <SearchInfoItem>教育</SearchInfoItem>
            <SearchInfoItem>教育</SearchInfoItem>
            <SearchInfoItem>教育</SearchInfoItem> */}
          </SearchInfoList>
        </SearchInfo>
      )
    }else {
      return null
    }
  }
}



const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header','focused']),
    list: state.getIn(['header','list'])
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.searchFocus())
      dispatch(actionCreators.getList())
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    }
  }
}
 
export default connect(mapStateToProps, mapDispathToProps)(Header); 