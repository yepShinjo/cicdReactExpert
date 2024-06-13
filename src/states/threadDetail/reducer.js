const initState = {
  threadDetail: {},
  commentCreated: false
}

const detailThreadReducer = (state = initState, action) => {
  switch (action.type) {
    case 'getThreadDetail':
      return {
        ...state,
        threadDetail: action.data
      }
    case 'createComment':
      return {
        ...state,
        commentCreated: action.data
      }
      // case vote
    case 'upVoteThreadDetail':
      return {
        ...state,
        threadDetail: {
          ...state.threadDetail,
          upVotesBy: [...state.threadDetail.upVotesBy, action.data.userId],
          downVotesBy: state.threadDetail.downVotesBy.filter((id) => id !== action.data.userId)
        }
      }
    case 'downVoteThreadDetail':
      return {
        ...state,
        threadDetail: {
          ...state.threadDetail,
          downVotesBy: [...state.threadDetail.downVotesBy, action.data.userId],
          upVotesBy: state.threadDetail.upVotesBy.filter((id) => id !== action.data.userId)
        }
      }
    case 'neutralizeThreadDetailVote':
      return {
        ...state,
        threadDetail: {
          ...state.threadDetail,
          upVotesBy: state.threadDetail.upVotesBy.filter((id) => id !== action.data.userId),
          downVotesBy: state.threadDetail.downVotesBy.filter((id) => id !== action.data.userId)
        }
      }
    default:
      return state
  }
}

export default detailThreadReducer
