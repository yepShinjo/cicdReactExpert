import { hideLoading, showLoading } from 'react-redux-loading-bar'
import api from '../../services/api'

const getLeaderboardsAction = (data) => ({
  type: 'getLeaderboards',
  data
})

const getLeaderboardsAsyncAction = () => async (dispatch) => {
  dispatch(showLoading())
  try {
    const leaderboards = await api.getLeaderboards()
    dispatch(getLeaderboardsAction(leaderboards))
  } catch (error) {
    console.log(error)
    throw error
  } finally {
    dispatch(hideLoading())
  }
}

export { getLeaderboardsAsyncAction, getLeaderboardsAction }
