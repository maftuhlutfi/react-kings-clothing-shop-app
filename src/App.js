import React from 'react';
import './App.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import Login from './pages/Login';
import Register from './pages/Register';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { connect } from 'react-redux';
import { setCurrentUser } from './redux/actions';

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: userRef.id,
              ...snapShot.data()
            }
          })
        })
      }

      setCurrentUser(userAuth);
    })
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
          <Route exact path='/shop' component={ShopPage} />
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

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);