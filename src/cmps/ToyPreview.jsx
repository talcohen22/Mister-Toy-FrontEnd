import { useNavigate } from "react-router-dom"

export function ToyPreview({ toy, onRemoveToy }) {

    const navigate = useNavigate()

    function onGetDetails(){ 
        navigate(`/toy/${toy._id}`)
    }

    return (
        <div className="toy-preview">
            <h1>{toy.name}</h1>
            <p>{'price: ' + toy.price}</p>
            <button onClick={onGetDetails}>Details</button>
            <button onClick={() => onRemoveToy(toy._id)}>Remove</button>
        </div>
    )
}