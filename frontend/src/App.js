import { Route, Routes } from "react-router-dom";
import HomePage from './pages/Home/Home';
import ProductDetail from "./components/ProductDetails";
import ProductListing from "./components/ProductList";

function App() {

  const items = [
];

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:productId" element={<ProductDetail items={items} />} /> 
        <Route path="/list" element={<ProductListing />} />
      </Routes>
    </>
  );
}

export default App;
