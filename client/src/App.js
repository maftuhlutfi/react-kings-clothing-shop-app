import React, { useEffect, lazy, Suspense } from 'react';
import './App.scss';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/Header';
import Spinner from './components/Spinner';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/selectors/userSelector';
import { checkUserSession } from './redux/actions/userActions';

// Dynamically import components
const HomePage = lazy(() => import('./pages/HomePage'));
const ShopPage = lazy(() => import('./pages/ShopPage'));
const CheckoutPage = lazy(() => import('./pages/CheckoutPage'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession])

  return (
    <div className='App'>
      <Header />
      <Switch>
        <Suspense fallback={<Spinner />}>
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
        </Suspense>
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