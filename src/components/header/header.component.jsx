import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../../redux/user/user-selectors'

// App <-- Header
const Header = ({ currentUser }) =>
    <div className="header">
        {
            currentUser
                ? <div className="option" onClick={() => auth.signOut()} >
                    SIGN OUT
                  </div>

                : <Link className="option" to='/sign-in'>
                    SIGN IN
                  </Link>
        }
    </div>


const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser
})

export default connect(mapStateToProps)(Header)
