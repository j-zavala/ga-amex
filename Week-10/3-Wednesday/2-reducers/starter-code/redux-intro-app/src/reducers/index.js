const initialState = {
  visibilityFilter: 'SHOW_ALL',
  todos: [
    {
      text: 'grocery shopping',
      completed: true
    },
    {
      text: 'workout',
      completed: false
    }
  ]
}

function todoApp (state = initialState, action) {
  return state
}

export default todoApp
