import { useState } from "react";
import { Products } from "./components/Products.jsx";
import { products as initialProducts } from "./mocks/products";

function App() {
  const [products] = useState(initialProducts)
  const [filters, setFilters] = useState ({
    category: 'laptops',
    minPrince: 0
  })

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrince &&
        (
          filters.category === 'all' ||
          product.category === filters.category
        )
      )
    })
  }

  const filteredProducts = filterProducts(products)

  return (
    <>
      <h1>Carrito de compras</h1>
      <Products products={filteredProducts} />
    </>
  );
}

export default App;
