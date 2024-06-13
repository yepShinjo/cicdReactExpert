import { describe, expect, vitest } from 'vitest'
import api from '../../services/api'
import { getLeaderboardsAction, getLeaderboardsAsyncAction } from './action'

describe('leaderboards', () => {
  it('should check the leaderboards correctness', async () => {
    const dispatch = vitest.fn()
    vitest.spyOn(api, 'getLeaderboards').mockResolvedValue([{}])
    await getLeaderboardsAsyncAction()(dispatch)
    expect(dispatch).toHaveBeenCalledWith(getLeaderboardsAction([{}]))
  })
})
