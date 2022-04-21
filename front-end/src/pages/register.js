import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [alert, setAlert] = useState('')
  const [error, setError] = useState('')

  const ChangeUsername = (e) => {
    const value = e.target.value
    setName(value)
    setError('')
  }

  const ChangeEmail = (e) => {
    const value = e.target.value
    setEmail(value)
    setError('')
  }

  const ChangePassword = (e) => {
    const value = e.target.value
    setPassword(value)
    setError('')
  }

  const submitRegister = () => {
    const data = {
      name: name,
      email: email,
      password: password
    }
    axios.post('http://localhost:5000/register', data)
      .then(result => {
        if (result && result.data) {
          setName('')
          setEmail('')
          setPassword('')
          setAlert(result.data.message)
          setTimeout(() => {
            setAlert('')
          }, 3000)
        }
      })
      .catch(e => {
        setError(e.response.data.message)
      })
  }
  return (
        <div style = {{ marginTop: '80px' }}>
             <div>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Register</h2>
              <p className="mt-2 text-center text-sm text-gray-600">
              </p>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="card p-4">
                            <div className="card-body">
                                {
                                    error && (
                                        <div className="alert alert-danger">
                                            <p>{error}</p>
                                        </div>
                                    )
                                }
                                {
                                    alert && (
                                        <div className="alert alert-primary">
                                            <p>{alert}</p>
                                        </div>
                                    )
                                }
                                <div className="form-group">
                                    <label>Username</label>
                                    <input type="text" placeholder="Username" className="form-control" value={name} onChange={ChangeUsername}></input>
                                </div>

                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" placeholder="Email" className="form-control" value={email} onChange={ChangeEmail}></input>
                                </div>

                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" placeholder="Password" className="form-control" value={password} onChange={ChangePassword}></input>
                                </div>

                                <div className="row">
                                    <div className="col-md-6">
                                        <button className="btn btn-primary" onClick={submitRegister}>Register</button>
                                        </div>

                                    <div className="col-md-6 text-right">
                                        <Link to="/login" className="">
                                            Login
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </div>
  )
}
export default Register