import React, { useEffect } from 'react';
import './App.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import CheckoutPage from './pages/CheckoutPage';
import Login from './pages/Login';
import Register from './pages/Register';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/selectors/userSelector';
import { checkUserSession } from './redux/actions/userActions';

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession])

  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route
          exact
          path='/checkout'
          render={() => currentUser ? <CheckoutPage /> : <Login />}
        />
        <Route
          exact
          path='/login'
          render={() => currentUser ? (<Redirect to='/' />) : <Login />}
        />
        <Route
          exact
          path='/register'
          render={() => currentUser ? (<Redirect to='/' />) : <Register />}
        />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);