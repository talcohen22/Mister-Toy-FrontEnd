import { toyService } from "../../services/toy.service"
import { store } from "../store"
import { REMOVE_TOY, SET_FILTER_BY, SET_IS_LOADING, SET_TOYS } from "../reducers/toy.reducer"

export function loadtoys(delay = 500) {
    const { filterBy } = store.getState().toyModule

    store.dispatch({ type: SET_IS_LOADING, isLoading: true })

    return toyService.query(filterBy, delay)
        .then(toys => { //update toys isn store
            store.dispatch({ type: SET_TOYS, toys })
        })
        .catch(err => {
            console.log('cannot load todos', err)
            throw err
        })
        .finally(() => {
            store.dispatch({ type: SET_IS_LOADING, isLoading: false })
        })
}

export function removeToy(toyId) {
    return toyService.remove(toyId)
        .then(() => {
            store.dispatch({ type: REMOVE_TOY, toyId })
        })
        .catch(err => {
            throw err
        })
}

export function setFilterByAction(filterBy) {
    store.dispatch({ type: SET_FILTER_BY, filterBy })
}
