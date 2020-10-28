import React from 'react';
import 'normalize.css'
import {BrowserRouter,Switch} from 'react-router-dom'
import {IsUserRedirect,ProtectedRoute} from './util/AuthRoute'
import useAuthListner from './hooks/useAuthListener'
import Home from './pages/Home'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Browse from './pages/Browse'

function App() {
  const user=useAuthListner()
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <IsUserRedirect exact user={user} loggedInPath="/browse" path="/">
            <Home />
          </IsUserRedirect>

          <IsUserRedirect exact user={user} loggedInPath="/browse" path="/signin">
            <Signin />
          </IsUserRedirect>

          <IsUserRedirect exact user={user} loggedInPath="/browse" path="/signup">
            <Signup />
          </IsUserRedirect>

          <ProtectedRoute user={user} path="/browse" exact>
            <Browse />
          </ProtectedRoute>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
