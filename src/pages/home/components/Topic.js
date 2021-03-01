import React, { Component } from 'react';
import { connect } from 'react-redux'
import { 
  TopicWrapper,
  TopicItem 
} from '../style'

class Topic extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    return ( 
      <TopicWrapper>
        {
          this.props.list.map((item) => {
            return (
              <TopicItem key={item.get('id')}>
                <img className='topic-pic' src={item.get('imgUrl')} alt="" />
                {item.get('title')}
              </TopicItem>
            )
          })
        }
        {/* <TopicItem>
          <img className='topic-pic' src="https://www.soundws.com/img/mszyy.202b6940.png" alt=""/>
          社会热点
        </TopicItem> */}
      </TopicWrapper>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    list: store.getIn(['home', 'topicList'])
  }
}
 
export default connect(mapStateToProps, null)(Topic);