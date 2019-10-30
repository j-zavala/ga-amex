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

function todosReducer (state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        action.newTodo
      ]

    case 'TOGGLE_TODO':
      return state.map((todo, index) => {
        if (index === action.index) {
          return { ...todo, completed: !todo.completed }
        }

        return todo
      })

    case 'UPDATE_TODO':
      return state.map((todo, index) => {
        if (index === action.updatedTodo.index) {
          return { ...todo, text: action.updatedTodo.text }
        }

        return todo
      })
    default:
      return state
  }
}

function visibilityFilterReducer (state = 'SHOW_ALL', action) {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter

    default:
      return state
  }
}

function todoApp (state = initialState, action) {
  return {
    visibilityFilter: visibilityFilterReducer(state.visibilityFilter, action),
    todos: todosReducer(state.todos, action)
  }
}

export default todoApp
