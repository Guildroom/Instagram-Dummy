import { useState, Fragment } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [redirect, setRedirect] = useState(false)
  const [error, setError] = useState('')

  const onChangeUsername = (e) => {
    const value = e.target.value
    setName(value)
    setError('')
  }

  const onChangePassword = (e) => {
    const value = e.target.value
    setPassword(value)
    setError('')
  }

  const submitLogin = () => {
    const data = {
      name: name,
      password: password
    }

    axios.post('http://localhost:5000/login', data)
      .then(result => {
        if (result) {
          localStorage.setItem('token', result.data.token)
          setRedirect(true)
        }
      })
      .catch(e => {
        setError(e.response.data.message)
      })
  }

  return (
        <Fragment>
            {
                redirect && (
                    <Redirect to="/profile" />
                )
            }
        <div style = {{ marginTop: '100px' }}>
             <div>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Login</h2>
              <p className="mt-2 text-center text-sm text-gray-600">
              </p>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="card p-4">
                            {
                                error && (
                                    <div className="alert alert-danger">
                                            <p>{error}</p>
                                    </div>
                                )
                            }
                            <div className="card-body">
                                <div className="form-group">
                                    <label>Username</label>
                                    <input type="text" placeholder="Username" className="form-control" value={name} onChange={onChangeUsername}></input>
                                </div>

                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" placeholder="Password" className="form-control" value={password} onChange={onChangePassword}></input>
                                </div>

                                <div className="row">
                                    <div className="col-md-6">
                                        <button className="btn btn-primary" onClick={submitLogin}>Login</button>
                                        </div>

                                    <div className="col-md-6 text-right">
                                        <Link to="/register" className="">
                                            Register
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    </Fragment>
  )
}
export default Login
