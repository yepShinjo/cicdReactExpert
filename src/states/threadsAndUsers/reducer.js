const initState = {
  threads: [],
  users: [],
  createThread: false
}

const threadsAndUsersReducer = (state = initState, action) => {
  console.log(action.type)
  switch (action.type) {
    case 'getThreadsAndUsers':
      return {
        ...state,
        threads: action.data.threads,
        users: action.data.users
      }
    case 'createThread':
      return {
        ...state,
        createThread: action.data
      }
      // Case Vote
    case 'upVoteThread':
      return {
        ...state,
        threads: state.threads.map((thread) => {
          if (thread.id === action.data.threadId) {
            return {
              ...thread,
              upVotesBy: [...thread.upVotesBy, action.data.userId],
              downVotesBy: thread.downVotesBy.filter((id) => id !== action.data.userId)
            }
          } else {
            return thread
          }
        })
      }
    case 'downVoteThread':
      return {
        ...state,
        threads: state.threads.map((thread) => {
          if (thread.id === action.data.threadId) {
            return {
              ...thread,
              downVotesBy: [...thread.downVotesBy, action.data.userId],
              upVotesBy: thread.upVotesBy.filter((id) => id !== action.data.userId)
            }
          } else {
            return thread
          }
        })
      }
    case 'neutralizeThreadVote':
      return {
        ...state,
        threads: state.threads.map((thread) => {
          if (thread.id === action.data.threadId) {
            return {
              ...thread,
              upVotesBy: thread.upVotesBy.filter((id) => id !== action.data.userId),
              downVotesBy: thread.downVotesBy.filter((id) => id !== action.data.userId)
            }
          } else {
            return thread
          }
        })
      }
      // Case Vote Tutup
    default:
      return state
  }
}

export default threadsAndUsersReducer
