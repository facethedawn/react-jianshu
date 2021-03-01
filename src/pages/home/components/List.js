import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  ListItem,
  ListInfo
} from '../style'

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div>
        {
          this.props.articleList.map(item => {
            return (
              <ListItem key={item.get('id')}>
                <img src={item.get('imgUrl')} alt="" className='pic'/>
                <ListInfo>
                  <h3 className='title'>{item.get('title')}</h3>
                  <p className='desc'>{item.get('desc')}</p>
                </ListInfo>
              </ListItem>
            )
          })
        }
        {/* <ListItem>
          <img src="https://www.soundws.com/img/footerBg.63437b70.png" alt="" className='pic'/>
          <ListInfo>
            <h3 className='title'>百万字日更完成后，是什么感觉呢</h3>
            <p className='desc'>没感觉。 感觉水平差的还很远。 比起码字狂人来说，简直不算不什么。 但对于我们每天最多写千把字的写手来说，百万字的确是一个里碑的意义转折点。 前...</p>
          </ListInfo>
        </ListItem> */}
      </div> 
    );
  }
}

const mapStateToProps = (state) => {
  return {
    articleList: state.getIn(['home', 'articleList'])
  }
}
 
export default connect(mapStateToProps, null)(List);