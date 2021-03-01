import { fromJS } from 'immutable'
const defaultState = fromJS({
  topicList: [{
    id: 1,
    title: '社会热点1',
    imgUrl: 'https://www.soundws.com/img/mszyy.202b6940.png'
  },
  {
    id: 2,
    title: '社会热点2',
    imgUrl: 'https://www.soundws.com/img/mszyy.202b6940.png'
  },
  {
    id: 3,
    title: '社会热点3',
    imgUrl: 'https://www.soundws.com/img/mszyy.202b6940.png'
  },
  {
    id: 4,
    title: '社会热点4',
    imgUrl: 'https://www.soundws.com/img/mszyy.202b6940.png'
  },
  {
    id: 5,
    title: '社会热点5',
    imgUrl: 'https://www.soundws.com/img/mszyy.202b6940.png'
  },
  {
    id: 6,
    title: '社会热点6',
    imgUrl: 'https://www.soundws.com/img/mszyy.202b6940.png'
  },
  {
    id: 7,
    title: '社会热点7',
    imgUrl: 'https://www.soundws.com/img/mszyy.202b6940.png'
  }
  ],
  articleList:[
    {
      id: 1,
      title: '百万字日更完成后，是什么感觉呢1',
      desc: '没感觉。 感觉水平差的还很远。 比起码字狂人来说，简直不算不什么。 但对于我们每天最多写千把字的写手来说，百万字的确是一个里碑的意义转折点。 前...',
      imgUrl: 'https://www.soundws.com/img/footerBg.63437b70.png'
    },
    {
      id: 2,
      title: '百万字日更完成后，是什么感觉呢2',
      desc: '没感觉。 感觉水平差的还很远。 比起码字狂人来说，简直不算不什么。 但对于我们每天最多写千把字的写手来说，百万字的确是一个里碑的意义转折点。 前...',
      imgUrl: 'https://www.soundws.com/img/footerBg.63437b70.png'
    }
  ]
})

const reducer =  (state = defaultState, action) => {
  return state
}

export default reducer