import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerAsyncAction } from '../states/authProfile/action'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })
  const { registered } = useSelector((state) => state.auth)
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
    dispatch(registerAsyncAction(formData))
  }

  useEffect(() => {
    console.log('Register State:', registered) // Debugging
    if (registered) {
      console.log('Redirecting to /login') // Debugging
      navigate('/login')
    }
  })

  return (
    <div>
      <h1>Register page</h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6 custom-width">
            <div className="mb-3">
              <label htmlFor="exampleInputName1" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="exampleInputName1"
                aria-describedby="nameHelp"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input
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
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                id="password"
                aria-describedby="passwordHelp"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <button className="btn btn-primary mb-3" type="submit">Register</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Register
