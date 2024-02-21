import { Products } from "./components/Products.jsx";
import { products } from "./mocks/products";

function App() {
  return (
    <>
      <h1>Carrito de compras</h1>
      <Products products={products} />
    </>
  );
}

export default App;
