/* eslint-disable react/jsx-key */
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { downVoteThreadAsyncAction, getThreadsAndUsersAsyncAction, neutralizeThreadVoteAsyncAction, upVoteThreadAsyncAction } from '../states/threadsAndUsers/action'
import { getThreadDetailAsyncAction } from '../states/threadDetail/action'
import { formatDate } from '../utils/formatDate'

const Home = () => {
  const { users, threads } = useSelector((store) => store.threadsAndUsers)
  const { profile, isLogin } = useSelector((store) => store.auth)

  const dispatch = useDispatch()
  const loadingState = useSelector((store) => store.loadingBar)
  const loading = loadingState.default

  const handleNeutralize = (threadId) => dispatch(neutralizeThreadVoteAsyncAction({ threadId }))

  const handleUpVote = (threadId) => {
    // exit duluan kalau loading
    if (loading) {
      return
    }

    // cari threadnya
    const selectedThread = threads.find((thread) => thread.id === threadId)

    // cek apa dia udah upvote atau belum
    const hasUpvoted = selectedThread.upVotesBy.includes(profile.id)

    // kalau belum, buat supaya dia upvote
    if (!hasUpvoted) {
      dispatch(upVoteThreadAsyncAction({ threadId, userId: profile.id }))

    // else, netralin votenya (dari upvote ke netral)
    } else {
      handleNeutralize(threadId)
    }
  }
  const handleDownVote = (threadId) => {
    if (loading) {
      return
    }

    const selectedThread = threads.find((thread) => thread.id === threadId)

    const hasDownvoted = selectedThread.downVotesBy.includes(profile.id)

    if (!hasDownvoted) {
      dispatch(downVoteThreadAsyncAction({ threadId, userId: profile.id }))
    } else {
      handleNeutralize(threadId)
    }
  }

  useEffect(() => {
    dispatch(getThreadsAndUsersAsyncAction())
  }, [])

  useEffect(() => {
    if (threads.length > 0) {
      threads.forEach(thread => {
        dispatch(getThreadDetailAsyncAction(thread.id))
      })
    }
  }, [threads])

  return (
    <div>
      <h2 className="text-center">Homepage</h2>
      <div>
      {threads.length > 0 && threads.map((thread) => {
        return (
            <div className="card w-75 mb-3 mx-auto">
              <div className="card-body">
                <Link to={`/threads/${thread.id}`}>
                  <h4 className="card-title"> {thread.title} </h4>
                </Link>

              <p className="card-text">{thread.body}</p>

              <p className="text-muted">{users.find((user) => user.id === thread.ownerId).name} . {formatDate(thread.createdAt)}</p>
              <p>jumlah komen {thread.totalComments}</p>

                <div className="d-flex">
                  <button
                    className={` m-3 btn btn-primary ${thread.upVotesBy.includes(profile.id)}`}
                    onClick={() => handleUpVote(thread.id)}
                  >
                    <span>Upvote &nbsp;</span>
                    <span className="badge bg-light text-dark ms-1">{thread.upVotesBy.length}</span>
                  </button>

                  <button
                    className={` m-3 btn btn-primary ${thread.downVotesBy.includes(profile.id)}`}
                    onClick={() => handleDownVote(thread.id)}
                  >
                    <span>Downvote &nbsp;</span>
                    <span className="badge bg-light text-dark ms-1">{thread.downVotesBy.length}</span>
                  </button>
                </div>

              </div>
            </div>
        )
      })}
      </div>
      {isLogin && (
      <div className="d-flex justify-content-center">
        <Link to="/create-diskusi">
          <button className="btn btn-primary mb-3" type="button">Buat Diskusi</button>
        </Link>
      </div>
      )}
    </div>
  )
}

export default Home
