import React from 'react';
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

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    /*this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: userRef.id,
            ...snapShot.data()
          })
        })
      }

      setCurrentUser(userAuth);
    })*/
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route 
            exact 
            path='/checkout' 
            render={() => this.props.currentUser ? <CheckoutPage /> : <Login />} 
          />
          <Route 
            exact 
            path='/login' 
            render={() => this.props.currentUser ? (<Redirect to='/' />) : <Login />} 
           />
          <Route 
            exact 
            path='/register' 
            render={() => this.props.currentUser ? (<Redirect to='/' />) : <Register />} 
           />
        </Switch>
      </div>
    );
  }

}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(App);