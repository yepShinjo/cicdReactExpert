import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createThreadAsyncAction } from '../states/threadsAndUsers/action'
import { useNavigate } from 'react-router-dom'

const CreateDiskusi = () => {
  const [formDiskusi, setFormDiskusi] = useState({
    title: '',
    body: '',
    category: ''
  })
  const { createThread } = useSelector((store) => store.threadsAndUsers)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormDiskusi((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { title, body, category } = formDiskusi
    dispatch(createThreadAsyncAction({ title, body, category }))
  }

  useEffect(() => {
    if (createThread) {
      navigate('/')
    }
  }, [createThread])
  return (
  <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            placeholder="Title"
            value={formDiskusi.title}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Body</label>
          <textarea
            className="form-control"
            id="body"
            name="body"
            placeholder="Body"
            value={formDiskusi.body}
            onChange={handleChange}
            style={{ height: '100px' }}
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Category</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            name="category"
            placeholder="Category"
            value={formDiskusi.category}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default CreateDiskusi
