export const SET_TOYS = 'SET_TOYS'
export const REMOVE_TOY = 'REMOVE_TOY'
export const SET_FILTER_BY = 'SET_FILTER_BY'
export const SET_IS_LOADING = 'SET_IS_LOADING'
// export const ADD_TODO = 'ADD_TODO'
// export const SET_PRECENT = 'SET_PRECENT'
// export const SET_PAGE = 'SET_PAGE'

const initialState = {
    toys: [],
    filterBy: { name: '', inStock: 'All', labels: [] },
    isLoading: true,
}

export function toyReducer(state = initialState, action = {}) {
    let toys
    switch (action.type) {
        case SET_TOYS:
            return { ...state, toys: action.toys }

        case REMOVE_TOY:
            toys = state.toys.filter(toy => toy._id !== action.toyId)
            return { ...state, toys }

        case SET_FILTER_BY:
            return { ...state, filterBy: action.filterBy }

        case SET_IS_LOADING:
            return { ...state, isLoading: action.isLoading }

        default:
            return state


        // case UPDATE_TODO:
        //     todos = state.todos.map(todo => todo._id !== action.todoId? todo : action.todo)
        //     return { ...state, todos }

        // case ADD_TODO:
        //     todos = [...state.todos, action.todo]
        //     return { ...state, todos }


        // case SET_PRECENT:
        //     return { ...state, precentDoneTodo: action.precentDoneTodo }


        // case SET_PAGE:
        //     return {...state, page: action.page}
    }
}