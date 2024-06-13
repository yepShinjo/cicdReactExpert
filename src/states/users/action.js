import api from '../../services/api'

const getUsers = (data) => ({
  type: 'getUsers',
  data
})

const getUsersThunk = () => async (dispatch) => {
  try {
    const users = await api.getAllUsers()
    dispatch(getUsers(users))
  } catch (error) {
    console.log(error)
  }
}

export {
  getUsersThunk
}
