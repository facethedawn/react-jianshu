import { fromJS } from 'immutable'
import { constants } from './index'
const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 0
})

const reducer =  (state = defaultState, action) => {
  switch(action.type) {
    case constants.CHANGE_HOME_DATA:
      return state.merge({
        'topicList': fromJS(action.topicList),
        'articleList': fromJS(action.articleList),
        'recommendList': fromJS(action.recommendList)
      })
    case constants.ADD_ARTICLE_LIST:
      return state.merge({
        articleList: state.get('articleList').concat(action.list),
        articlePage: action.nextPage
      })
      // return state.set('articleList', state.get('articleList').concat(action.list))
    default:
      return state
  }
}

export default reducer