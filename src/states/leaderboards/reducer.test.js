import { describe, it, expect } from 'vitest'
import leaderboardsReducer from './reducer'

describe('leaderboardsReducer', () => {
  it('getLeaderboards', () => {
    const action = {
      type: 'getLeaderboards',
      data: [{}]
    }

    const initState = {
      leaderboards: []
    }

    const result = leaderboardsReducer(initState, action)
    console.log(result)
    expect(result).toEqual({ leaderboards: [{}] })
  })
  it('initState', () => {
    const result = leaderboardsReducer(undefined, {})
    expect(result).toEqual({ leaderboards: [] })
  })
})
