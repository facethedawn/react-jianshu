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
  margin: 0 auto;
  background-color: green;
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

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  box-sizing: border-box;
  width: 160px;
  height: 38px;
  border: none;
  padding: 0 20px;
  outline: none;
  border-radius: 19px;
  background: #eee;
  margin-top: 9px;
  font-size: 14px;
  &::placeholder {
    color:#999;
  }
`