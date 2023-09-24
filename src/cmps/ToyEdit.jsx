import { useNavigate, useParams } from "react-router-dom";
import { toyService } from "../services/toy.service";
import { useState, useEffect } from "react"

export function ToyEdit() {
    const [toyToEdit, setToyToEdit] = useState(toyService.getEmptyToy())
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (params.toyId) loadToy()
    }, [])

    function loadToy() {
        toyService.get(params.toyId)
            .then(setToyToEdit)
            .catch(err => showErrorMsg('Cannot load toy'))
    }

    function onSaveToy(ev) {
        ev.preventDefault()
        toyService.save(toyToEdit)
            .then(() => navigate('/toy'))
            .catch(err => console.log('Cannot save toy'))
    }

    function handleChange({ target }) {
        const field = target.name
        let value = target.value

        switch (target.type) {
            case 'number':
            case 'range':
                value = +value || ''
                break;

            case 'checkbox':
                value = target.checked
                break

            default:
                break;
        }

        setToyToEdit(prevToyToEdit => ({ ...prevToyToEdit, [field]: value }))
    }

    const { name, price, inStock } = toyToEdit

    return (
        <section className="toy-edit">
            <form onSubmit={onSaveToy} >
                <label htmlFor="name">Name:</label>
                <input onChange={handleChange} value={name} type="text" name="name" id="name" />

                <label htmlFor="price">Price:</label>
                <input onChange={handleChange} value={price || ''} type="number" name="price" id="price" />

                <label htmlFor="inStock">In Stock:</label>
                <input onChange={handleChange} checked={inStock} type="checkbox" name="inStock" id="inStock" />

                <button>Save</button>
            </form>
        </section>
    )

}