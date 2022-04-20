import Profile from './pages/profile'
import Register from './pages/register'
import Login from './pages/login'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App () {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/profile" exact render={() => <Profile />} />
          <Route path="/register" exact render={() => <Register />} />
          <Route path="/login" exact render={() => <Login />} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
