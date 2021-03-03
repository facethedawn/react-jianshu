import { constants } from './index'
import axios from 'axios'

const getDetailData = (data) => ({
  type: constants.GET_DETAIL,
  title: data.title,
  content: data.content
})

export const getDetail = (id) => {
  return (dispatch) => {
    axios.get('/api/detail.json?id=' + id).then(res => {
      dispatch(getDetailData(res.data.data))
    })
  }
}