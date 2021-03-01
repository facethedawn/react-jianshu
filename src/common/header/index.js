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
    const { focused, handleInputFocus, handleInputBlur, list } = this.props
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
                in = {focused}
                timeout = {200}  
                classNames = "slide"
              >
                <NavSearch
                  className = {focused ? 'focused': ''}
                  onFocus = {() => handleInputFocus(list)}
                  onBlur = {handleInputBlur}
                >
                </NavSearch>
              </CSSTransition>
              <span className = {focused ? 'focused iconfont zoom': 'iconfont zoom'}>&#xe6e0;</span>
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
    const { focused, mouseIn, list, page, totalPage, handleMouseEnter, handleMouseLeave, handleChangePage, } = this.props
    const newList = list.toJS()
    const pageList = []

    if(newList.length) {
      for(let i = ((page - 1) * 10); i< (page * 10); i++) {
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        )
      }
    }

    if (focused || mouseIn) {
      return (
        <SearchInfo 
          onMouseEnter = { handleMouseEnter }
          onMouseLeave = { handleMouseLeave }
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
              <span className='iconfont spin' ref={icon => {this.spinIcon = icon}}>&#xe6dc;</span>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            { pageList }
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
    list: state.getIn(['header','list']),
    page: state.getIn(['header','page']),
    totalPage: state.getIn(['header','totalPage']),
    mouseIn: state.getIn(['header','mouseIn'])
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      if(!list.size) {
        dispatch(actionCreators.getList())
      }
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave())
    },
    handleChangePage(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig,'')
      if (originAngle) {
        originAngle = parseInt(originAngle, 10)
      }else {
        originAngle = 0
      }
      spin.style.transform = `rotate(${originAngle+360}deg)`
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1))
      } else {
        dispatch(actionCreators.changePage(1))
      }
      
    }
  }
}
 
export default connect(mapStateToProps, mapDispathToProps)(Header); 