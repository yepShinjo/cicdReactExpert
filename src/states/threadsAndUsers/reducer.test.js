import { describe, expect, it } from 'vitest'
import threadsAndUsersReducer from './reducer'

describe('threadsAndUsersReducer', () => {
  const state = {
    threads: [],
    users: [],
    createThread: false
  }
  it('getThreadsAndUsers', () => {
    const action = {
      type: 'getThreadsAndUsers',
      data: {
        threads: [{}],
        users: [{}],
        createThread: false
      }
    }
    const result = threadsAndUsersReducer(state, action)
    expect(result).toEqual({ ...state, ...action.data })
  })
  it('createThread', () => {
    const action = {
      type: 'createThread',
      data: true
    }
    const result = threadsAndUsersReducer(state, action)
    expect(result).toEqual({ ...state, createThread: true })
  })
  it('upVoteThread', () => {
    const action = {
      type: 'upVoteThread',
      data: {
        userId: 1,
        threadId: 1,
        threads: [{}]
      }
    }
    const result = threadsAndUsersReducer(state, action)
    expect(result).toEqual({ ...state, threads: [] })
  })
  it('downVoteThread', () => {
    const action = {
      type: 'downVoteThread',
      data: {
        userId: 1,
        threadId: 1,
        threads: [{}]
      }
    }
    const result = threadsAndUsersReducer(state, action)
    expect(result).toEqual({ ...state, threads: [] })
  })
  it('neutralizeThreadVote', () => {
    const action = {
      type: 'neutralizeThreadVote',
      payload: {
        userId: 1,
        threadId: 1
      }
    }
    const result = threadsAndUsersReducer(state, action)
    expect(result).toEqual({ ...state, threads: [] })
  })
})
