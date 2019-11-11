import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import userReducer from './user/user-reducer'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [] // no need to persist user reducer since this is already handled by firebase
}

const rootReducer = combineReducers({
    user: userReducer
})


export default persistReducer(persistConfig, rootReducer)
