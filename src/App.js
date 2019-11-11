import React, { Component } from 'react'
import './App.css'
import { Route, Switch, Redirect } from 'react-router-dom'
// Firebase
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
// Selectors/Actions
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user-actions'
import { selectCurrentUser } from './redux/user/user-selectors'
import { createStructuredSelector } from 'reselect'
// Components
import SignInSignUp from './pages/sign-in-sign-up/Sign-In-Sign-Up.page'
import Header from './components/header/header.component'

class App extends Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props // destructure off setCurrentUser action
    
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => { // add an observer that is triggered anytime user signs in/out
      if (user) {
        const userRef = await createUserProfileDocument(user) // get documentRef
        
        // get snapShot for queryRef & attach listener for any documentSnapshot events
        userRef.onSnapshot(snapShot => {
          setCurrentUser({ // dispatch action
            id: snapShot.id, // id from snapshot
            ...snapShot.data() // actual data - name, email, createdAt, etc.
          })
        })
      } else {
        setCurrentUser(user) // currentUser: null
      }
    })
  }

	render() {
    const { currentUser } = this.props // destructure currentUser off props passed in from reducer
    return (
      <div className='App'>
        <Header />
          App
        <Switch>
          <Route exact path='/sign-in' render={() => currentUser ? <Redirect to='/' /> : <SignInSignUp /> } />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
