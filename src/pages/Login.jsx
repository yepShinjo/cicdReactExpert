import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginAsyncAction } from '../states/authProfile/action'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const { isLogin } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(loginAsyncAction(formData))
  }

  useEffect(() => {
    if (isLogin) {
      navigate('/')
    }
  })

  return (
    <div>
      <h1>login page</h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
      <div className="row justify-content-center">
      <div className="col-12 col-md-8 col-lg-6 custom-width">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input
            data-cy-email="email"
            type="email"
            className="form-control"
            name="email"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input
            data-cy-password="password"
            type="password"
            className="form-control"
            name="password"
            id="exampleInputPassword1"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button data-cy="login-button" className="btn btn-primary mb-3" type="submit">Login</button>
        <p>dont have an account? register <Link to="/register">here</Link></p>
      </div>
      </div>
      </form>

    </div>
  )
}

export default Login
