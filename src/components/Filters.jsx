import { useState, useId } from "react"
import "./Filters.css"

export function Filters({onChange}) {
    const [minPrince, setMinPrice] = useState(0)
    const [category, setCategory] = useState(0)

    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleChangeMinPrice = (event) => {
        setMinPrice(event.target.value)
        onChange(prevState => ({
            ...prevState,
            minPrince: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        setCategory(event.target.value)
        onChange(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }

    return (
        <section className="filters">
            <div>
                <label htmlFor="price">Precio a partir de:</label>
                <input type="range" id={minPriceFilterId} min='0' max='1000' onChange={handleChangeMinPrice} />
                <span>${minPrince}</span>
            </div>

            <div>
                <label htmlFor="category">Categoria</label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value="all">Todas</option>
                    <option value="laptops">Notebooks</option>
                    <option value="smartphones">Celulares</option>
                </select>
            </div>
        </section>
    )
}

