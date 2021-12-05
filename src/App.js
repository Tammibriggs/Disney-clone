import React from 'react';
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Detail from './components/Detail';
import Login from './components/Login'
import {onAuthStateChanged} from 'firebase/auth'
import {useEffect} from 'react'
import {auth} from './firebase'
import { useDispatch } from 'react-redux';
import { setUserLogin } from './features/user/userSlice'
import { useSelector } from 'react-redux'
import { selectUserName } from './features/user/userSlice'
import { Redirect } from 'react-router';

function App() {

  const dispatch = useDispatch()
  const userName = useSelector(selectUserName)

  useEffect(() => {
    onAuthStateChanged(auth, authUser => {
      if (authUser) {
        dispatch(setUserLogin({
          name: authUser.displayName,
          email: authUser.email,
          photo: authUser.photoURL
        }))
      } else{ 
          dispatch(setUserLogin({
            name: null,
            email: null,
            photo: null,
          }))
        }
    })
  }, [])

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch >
          <Route path='/login'>
            {!userName ? <Login /> : <Redirect to='/'/>}
          </Route>
          <Route path='/detail/:id'>
            <Detail />
          </Route>
          <Route path='/'>
          {userName ? <Home /> : <Redirect to='/login'/>}
          </Route>
        </Switch>
      </Router >
    </div>
  );
}

export default App;
