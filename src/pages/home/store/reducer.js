import { fromJS } from 'immutable'
import { constants } from './index'
const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: []
})

const reducer =  (state = defaultState, action) => {
  switch(action.type) {
    case constants.CHANGE_HOME_DATA:
      return state.merge({
        'topicList': fromJS(action.topicList),
        'articleList': fromJS(action.articleList),
        'recommendList': fromJS(action.recommendList)
      })
    default:
      return state
  }
}

export default reducer