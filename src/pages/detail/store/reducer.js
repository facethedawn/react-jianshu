import { fromJS } from 'immutable'
import { constants } from './index'

const defaultState = fromJS({
  title: '',
  content: ''
})


const reducer =  (state = defaultState, action) => {
  switch(action.type) {
    case constants.GET_DETAIL:
      return state.merge({
        'title': fromJS(action.title),
        'content': fromJS(action.content)
      })
    default:
      return state
  }
}

export default reducer