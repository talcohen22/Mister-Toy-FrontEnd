import { useEffect } from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

import { toyService } from "../services/toy.service"
import { loadtoys, removeToy } from "../store/actions/toy.actions"
import { ToyList } from "../cmps/ToyList"
import { ToyFilter } from "../cmps/ToyFilter"

export function ToyIndex() {

    const toys = useSelector(storeState => storeState.toyModule.toys)
    const isLoading = useSelector(storeState => storeState.toyModule.isLoading)
    const filterBy = useSelector(storeState => storeState.toyModule.filterBy)

    useEffect(() => {
        loadtoys()
        .catch(err => console.log('cannot load toys'))
    }, [filterBy])

    function onRemoveToy(toyId){
        removeToy(toyId)
        .catch(err => console.log('cannot remove toys'))
    }

    return (
        <section className="toy-index-container">
            <ToyFilter/>
            <Link to="/toy/edit" >Add Toy</Link>
            {/* <Link className='add-toy-link' to='/toy/add'>Add toy</Link>
            <TodoFilter /> */}
            {!isLoading && <ToyList toys={toys} onRemoveToy={onRemoveToy}  />}
            {isLoading && <div>is loading...</div>}
            {!isLoading && !toys.length && <div>no toys...</div>}
        </section>
    )
}
