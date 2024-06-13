import api from '../../services/api'

const initState = {
  isLogin: false || (api.getAccessToken() && true),
  registered: false,
  profile: {}
}

const actionHandlers = {
  login: (state) => ({
    ...state,
    isLogin: true
  }),
  logout: (state) => ({
    ...state,
    isLogin: false,
    profile: {},
    registered: false
  }),
  register: (state) => ({
    ...state,
    registered: true
  }),
  setProfile: (state, action) => ({
    ...state,
    profile: action.data
  })
}

const authReducer = (state = initState, action) => {
  const handler = actionHandlers[action.type]
  return handler ? handler(state, action) : state
}

export default authReducer
