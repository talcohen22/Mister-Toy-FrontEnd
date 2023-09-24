import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { toyService } from "../services/toy.service"

export function ToyDetails() {

    const [toy, setToy] = useState(null)
    const { toyId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        toyService.get(toyId).then(setToy)
    }, [])

    function onGetToyPreview(){
        navigate('/toy')
    }

    function onEditToy(){
        navigate(`/toy/${toyId}/edit`)
    }

    if (!toy) return <div>Loading...</div>
    return (
        <div className="toy-details">
            <h1>{toy.name}</h1>
            <p>{'price: ' + toy.price}</p>
            <p>{toy.inStock ? 'exist in stock' : 'not exist in stock'}</p>
            <p>{'labels: ' + toy.labels.join(', ')}</p>
            <button onClick={onGetToyPreview}>Back</button>
            <button onClick={onEditToy}>Edit</button>
        </div>
    )
}