import axios from 'axios'
import { constants } from './index'
import { fromJS } from 'immutable'

const changeHomeData = (result) => ({
  type: constants.CHANGE_HOME_DATA,
  topicList: result.topicList,
  recommendList: result.recommendList,
  articleList: result.articleList
})
export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then(res => {
      const result = res.data.data
      const action = changeHomeData(result)
      dispatch(action)
    })
  }
}

const addHomeList = (list, nextPage) => ({
  type: constants.ADD_ARTICLE_LIST,
  list: fromJS(list),
  nextPage
})

export const getMoreList = (articlePage) => {
  return (dispatch) => {
    axios.get('api/homeList.json?page='+ articlePage).then(res => {
      const result = res.data.data
      dispatch(addHomeList(result, articlePage + 1))
    })
  }
}