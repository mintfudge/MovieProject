import IndexGenres from 'Genres/IndexGenres'
import Menu from 'Menu'
import LandingPage from 'Movies/LandingPage'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import routes from 'route-cofing'

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <div className="container">
        <Switch>
          {routes.map(route => (
            <Route key={route.path} path={route.path} exact={route.exact}>
              <route.component />
            </Route>
          ))}
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
