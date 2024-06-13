import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
  createCommentAsyncAction,
  downVoteThreadDetailAsyncAction,
  getThreadDetailAsyncAction,
  neutralizeThreadDetailVoteAsyncAction,
  upVoteThreadDetailAsyncAction
} from '../states/threadDetail/action'
import { formatDate } from '../utils/formatDate'

const ThreadDetail = () => {
  const [content, setContent] = useState('')
  const { id } = useParams()
  const dispatch = useDispatch()
  const { threadDetail, commentCreated } = useSelector((store) => store.threadDetail)
  const { profile } = useSelector((store) => store.auth)
  const loading = useSelector((store) => store.loadingBar.default)

  const handleVote = (threadId, voteType) => {
    if (loading) return

    const hasVoted = threadDetail[`${voteType}VotesBy`].includes(profile.id)

    const action = hasVoted

      ? neutralizeThreadDetailVoteAsyncAction
      : voteType === 'up'
        ? upVoteThreadDetailAsyncAction
        : downVoteThreadDetailAsyncAction

    dispatch(action({ threadId, userId: profile.id }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (content.trim()) {
      dispatch(createCommentAsyncAction({ threadId: id, content }))
    }
  }

  useEffect(() => {
    if (commentCreated) {
      setContent('')
      dispatch(getThreadDetailAsyncAction(id))
    }
  }, [commentCreated, dispatch, id])

  useEffect(() => {
    dispatch(getThreadDetailAsyncAction(id))
  }, [dispatch, id])

  return (
    <div className="m-4">
      <h2>{threadDetail.title}</h2>
      <p>{threadDetail.body}</p>
      <p className="text-muted">
      <img
        className="img-fluid rounded-circle mb-2"
        src={threadDetail.owner.avatar} alt="profile picture" /> {threadDetail.owner.name} • {formatDate(threadDetail.createdAt)}
      </p>
      <div>
        <button
          className="m-3 btn btn-primary"
          onClick={() => handleVote(id, 'up')}>
            Upvote {threadDetail.upVotesBy.length}
        </button>
        <button
          className="m-3 btn btn-primary"
          onClick={() => handleVote(id, 'down')}>
            Downvote {threadDetail.downVotesBy.length}
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <textarea
          className="form-control"
          rows={3}
          value={content}
          onChange={(e) => setContent(e.target.value)} />
        <button type="submit" className="btn btn-success m-3">Submit</button>
      </form>
      <div>
        {threadDetail.comments.map((comment) => (
          <div key={comment.id}>
            <p>{comment.content}</p>
            <p className="text-muted">
              {comment.owner.name} • {formatDate(comment.createdAt)}
              <hr />
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ThreadDetail
