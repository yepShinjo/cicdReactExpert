const initState = {
  usia: 0,
  users: []
}

const usersReducer = (state = initState, action) => {
  console.log(action)
  switch (action.type) {
    case 'getUsers':
      return {
        ...state,
        users: action.data

      }
    default:
      return state
  }
}

export default usersReducer
