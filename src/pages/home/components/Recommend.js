import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  RecommendWrapper,
  RecommendItem
} from '../style'

class Recommend extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <RecommendWrapper>
        {
          this.props.recommendList.map(item => {
            return(
              <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')}>
              </RecommendItem>
            )
          })
        }
        {/* <RecommendItem imgUrl='https://www.soundws.com/img/footerBg.63437b70.png'>
        </RecommendItem> */}
      </RecommendWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    recommendList: state.getIn(['home','recommendList'])
  }
}
 
export default connect(mapStateToProps, null)(Recommend);