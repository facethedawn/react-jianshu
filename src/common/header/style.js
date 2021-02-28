import styled from 'styled-components'
import logoPic from '../../static/logo.png'

export const HeaderWrapper = styled.div`
  height: 56px;
  position: relative;
  border-bottom: 1px solid #f0f0f0;
`
export const Logo = styled.a.attrs({
  href: '/'
})`
  position: absolute;
  display: block;
  height: 56px;
  width: 100px;
  background-image: url(${logoPic});
  background-size: cover;
`

export const Nav = styled.div`
  width: 960px;
  height: 56px;
  padding-right: 70px;
  box-sizing: border-box;
  margin: 0 auto;
`

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
  }
  &.active {
    color: #ea6f5a;
  }
`
export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  .iconfont {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 15px;
    &.focused {
      background-color: #777;
      color: #fff;
    }
    /* background-color: red; */
  }
`

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  box-sizing: border-box;
  width: 160px;
  height: 38px;
  border: none;
  padding: 0 30px 0 20px;
  outline: none;
  border-radius: 19px;
  background: #eee;
  margin-top: 9px;
  font-size: 14px;
  color: #666;
  &.focused {
    width: 240px;
  }
  &::placeholder {
    color:#999;
  }
  &.slide-enter {
    width: 160px;
    transition: all .2s ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: all .2s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
`

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`

export const Button = styled.div`
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px;
  font-size: 14px;
  border: 1px solid #ec6149;
  &.reg {
    color: #ec6149;
  }
  &.writting {
    color: #fff;
    background-color: #ec6149;
  }
`