import { ToyPreview } from "./ToyPreview"

export function ToyList({ toys, onRemoveToy }) {

    return (
        <section className="todo-list-container">
            <ul>
                {toys.map(toy =>
                    <li className="toy-item" key={toy._id}>
                        <ToyPreview toy={toy} onRemoveToy={onRemoveToy} />
                    </li>
                )}
            </ul>
        </section >
    )
}
