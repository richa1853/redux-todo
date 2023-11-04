import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // You can add middleware like Redux Thunk for handling async actions

import todoReducer from '../Reducers/todoReducer'; // Import your todo reducer

// Combine multiple reducers if you have more than one
const rootReducer = combineReducers({
  todos: todoReducer, // Assuming you have a 'todos' reducer
  // Add more reducers if needed
});

// Add middleware to the store (e.g., Redux Thunk for async actions)
const middleware = applyMiddleware(thunk);

// Create the Redux store
const store = createStore(rootReducer, middleware);

export default store;
