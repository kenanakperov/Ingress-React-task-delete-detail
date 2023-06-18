import ProductDetail from "./Pages/ProductDetail";
import ProductTable from "./Pages/ProductTable";
import { Route, Routes } from "react-router-dom"
function App() {
  return (
    <div className="App">      
      <Routes>
      <Route path="/" element={<ProductTable/>} />
      <Route path="/product-detail/:id" element={<ProductDetail/>} />
    </Routes>

    </div>
  );
}

export default App;
