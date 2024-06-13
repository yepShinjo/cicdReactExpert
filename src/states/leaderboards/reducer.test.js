/*
test scenario for leaderboardsReducer
- leaderboardsReducer function
   - should return the initial state which is an empty array when given not known action
   - should update the state with leaderboards data as an array of objects when given a getLeaderboards action
*/

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
