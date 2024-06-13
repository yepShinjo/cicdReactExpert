import { useDispatch, useSelector } from 'react-redux'
import {
  getProfileAsyncAction,
  logoutAction
} from '../states/authProfile/action'
import api from '../services/api'
import { Link } from 'react-router-dom'
import LoadingBar from 'react-redux-loading-bar'
import { useEffect } from 'react'

const Navbar = () => {
  const { profile } = useSelector((state) => state.auth)
  // const { threadDetail } = useSelector((store) => store.threadDetail);
  const dispatch = useDispatch()
  const handleLogout = () => {
    api.removeAccessToken()
    dispatch(logoutAction())
  }

  useEffect(() => {
    if (isLogin) {
      dispatch(getProfileAsyncAction())
    }
  }, [isLogin])
  return (
    <header className="w-75 mb-3 mx-auto">
      <LoadingBar />
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
        <img
          className="img-fluid rounded-circle mb-2"
          src={profile?.avatar} alt="profile picture" />
        <Link to={'/'} data>
          Forum
        </Link>
        <Link to={'/users'} data>
          users
        </Link>
        <Link to={'/leaderboards'}>Leaderboard Ranking</Link>
        {isLogin
          ? (
            <Link test-cy-logout="logout" onClick={handleLogout}>Logout</Link>
            )
          : (
          <Link test-cy="login" to={'/login'}>login</Link>
            )}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
