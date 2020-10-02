import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

import saga from '../sagas'
import { reducer } from '../reducers'

const sagaMiddleware = createSagaMiddleware()
export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
)
sagaMiddleware.run(saga)
