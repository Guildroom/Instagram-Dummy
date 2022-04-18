import Profile from './pages/profile'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App () {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/profile" exact render={() => <Profile />} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
