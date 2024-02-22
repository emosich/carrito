import { useState } from "react";
import { Products } from "./components/Products.jsx";
import { products as initialProducts } from "./mocks/products";
import { Header } from "./components/Header.jsx";

function App() {
  const [products] = useState(initialProducts)
  const [filters, setFilters] = useState ({
    category: 'all',
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
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
    </>
  );
}

export default App;
