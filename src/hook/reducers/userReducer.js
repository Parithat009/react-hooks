export const GET_USERS = 'GET_USERS'
export const EDIT_STATUS_USERS = 'EDIT_STATUS_USERS'

const getUsers = (users, state) => {
  return users
}

const editStatusUsers = (users, state) => {
  return users
}


export const usersReducer = (state, action) => {
  switch (action.type) {
    case GET_USERS:
      return getUsers(action.users, state)
    case EDIT_STATUS_USERS:
      return editStatusUsers(action.users, state)
    default:
      return state
  }
}