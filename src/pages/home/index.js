import React, { Component } from 'react';
import List from './components/List'
import Recommend from './components/Recommend'
import Topic from './components/Topic'
import Writer from './components/Writer'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import {
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className='banner-img' src="https://www.soundws.com/img/footerBg.63437b70.png" alt=""/>
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
      </HomeWrapper>
    );
  }

  componentDidMount() {
    this.props.changeHomeData()
  }
}

const mapDispatchToProps = dispatch => ({
  changeHomeData() {
    dispatch(actionCreators.getHomeInfo())
  }
})
 
export default connect(null, mapDispatchToProps)(Home);