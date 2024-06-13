/* eslint-disable react/jsx-key */
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLeaderboardsAsyncAction } from '../states/leaderboards/action'

const Leaderboards = () => {
  const { leaderboards } = useSelector((state) => state.leaderboards)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getLeaderboardsAsyncAction())
  }, [])
  return (
    <div>
      <h2 className="text-center">Leaderboards</h2>
      {leaderboards.map((leaderboard) => (
        <div className="card w-75 mb-3 mx-auto">
          <div className='card-body text-center'>
            <div className='card-title text-success'>
              <h4> {leaderboard.user.name} </h4>
            </div>
            <div className='text-info'>
              <h5> {leaderboard.score} points </h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Leaderboards
