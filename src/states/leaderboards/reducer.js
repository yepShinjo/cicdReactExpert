const initState = {
  leaderboards: []
}

const leaderboardsReducer = (state = initState, action) => {
  switch (action.type) {
    case 'getLeaderboards':
      return {
        ...state,
        leaderboards: action.data
      }
    default:
      return state
  }
}

export default leaderboardsReducer
