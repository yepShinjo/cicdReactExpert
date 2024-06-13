/*
test scenario for thunk action threads and users
- getThreadsAndUsersAsyncAction function
   - should call the API to fetch all threadsAndUsers data
   - should dispatch the getThreadsAndUsersAsyncAction after fetching the data with mocked dispatch
*/

import { describe, expect, vitest } from 'vitest'
import { getThreadsAndUsersAsyncAction } from './action'
import api from '../../services/api'

describe('thunk action threads and reducers', () => {
  it('getThreadsAndUsersAsyncAction', async () => {
    const dispatch = () => {}
    vitest.spyOn(api, 'getAllThreads').mockResolvedValue([{}])
    vitest.spyOn(api, 'getAllUsers').mockResolvedValue([{}])
    await getThreadsAndUsersAsyncAction()(dispatch)
    expect(api.getAllThreads).toHaveBeenCalled()
    expect(api.getAllUsers).toHaveBeenCalled()
  })
})
