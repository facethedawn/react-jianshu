import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
  login: false
})

const reducer = (state = defaultState, action) => {
  if(action.type === constants.CHANGE_LOGIN) {
    return state.set('login', fromJS(action.value))
  }
  return state
}


export default reducer