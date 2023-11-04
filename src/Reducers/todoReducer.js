const initialState = {
    todos: [],
  };
  
  const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_TODO":
        return {
          ...state,
          todos: [
            ...state.todos,
            {
              id: action.id, // You need to pass an ID for the new todo
              text: action.text, // You need to pass the text for the new todo
            completed: false, // Assuming the initial state is incomplete
            },
          ],
        };
      default:
        return state;
    }
  };
  
  export default todoReducer;
  