import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const ChangeUsername = (e) => {
    const value = e.target.value
    setName(value)
  }

  const ChangeEmail = (e) => {
    const value = e.target.value
    setEmail(value)
  }

  const ChangePassword = (e) => {
    const value = e.target.value
    setPassword(value)
  }

  const submitRegister = () => {
    const data = {
      name: name,
      email: email,
      password: password
    }
    axios.post('http://localhost:5000/register', { data })
      .catch(result => {
        console.log(result)
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
