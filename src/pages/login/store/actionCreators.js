import axios from 'axios' 
import * as constants from './constants'

const loginAction = ()=> ({
  type: constants.CHANGE_LOGIN,
  value: true
})

export const loginGetdata= (username, password) => {
  return (dispatch) => {
    axios.get('/api/login.json?username='+ username+ '&password='+ password).then(res => {
      const state = res.data.data
      if (state) {
        dispatch(loginAction())
      }else {
        console.error('登录失败');
      }
    })
  }
}