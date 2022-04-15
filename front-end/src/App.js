import Profile from "./pages/profile"

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
