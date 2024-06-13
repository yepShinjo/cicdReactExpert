import { hideLoading, showLoading } from 'react-redux-loading-bar'
import api from '../../services/api'

const getThreadDetailAction = (data) => ({
  type: 'getThreadDetail',
  data
})

const upVoteThreadDetailAction = (data) => ({
  type: 'upVoteThreadDetail',
  data
})

const downVoteThreadDetailAction = (data) => ({
  type: 'downVoteThreadDetail',
  data
})

const neutralizeThreadDetailVoteAction = (data) => ({
  type: 'neutralizeThreadDetailVote',
  data
})

const createCommentAction = (data) => ({
  type: 'createComment',
  data
})

const getThreadDetailAsyncAction = (id) => async (dispatch) => {
  dispatch(showLoading())
  try {
    const response = await api.getThreadDetail(id)
    dispatch(createCommentAction(false))
    dispatch(getThreadDetailAction(response))
  } catch (error) {
    console.log(error)
    throw error
  } finally {
    dispatch(hideLoading())
  }
}

const upVoteThreadDetailAsyncAction = (param) => async (dispatch) => {
  dispatch(showLoading())
  try {
    await api.upVoteThread(param.threadId)
    dispatch(upVoteThreadDetailAction(param))
  } catch (error) {
    console.log(error)
    throw error
  } finally {
    dispatch(hideLoading())
  }
}

const downVoteThreadDetailAsyncAction = (param) => async (dispatch) => {
  dispatch(showLoading())
  try {
    await api.downVoteThread(param.threadId)
    dispatch(downVoteThreadDetailAction(param))
  } catch (error) {
    console.log(error)
    throw error
  } finally {
    dispatch(hideLoading())
  }
}

const neutralizeThreadDetailVoteAsyncAction = (param) => async (dispatch) => {
  dispatch(showLoading())
  try {
    await api.neutralizeThreadVote(param.threadId)
    dispatch(neutralizeThreadDetailVoteAction(param))
  } catch (error) {
    console.log(error)
    throw error
  } finally {
    dispatch(hideLoading())
  }
}

const createCommentAsyncAction = (param) => async (dispatch) => {
  dispatch(showLoading())
  try {
    await api.createComment(param)
    dispatch(createCommentAction(true))
  } catch (error) {
    console.log(error)
    dispatch(createCommentAction(false))
    throw error
  } finally {
    dispatch(hideLoading())
  }
}

export { getThreadDetailAsyncAction, upVoteThreadDetailAsyncAction, downVoteThreadDetailAsyncAction, neutralizeThreadDetailVoteAsyncAction, createCommentAsyncAction }
