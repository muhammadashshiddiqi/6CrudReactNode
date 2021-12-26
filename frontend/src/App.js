import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateProduct from "./components/CreateProduct";
import EditProduct from "./components/EditProduct";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="container">
      <div className="colums">
        <div className="colum is-half is-offset-one-quarter">
          <h2>Welocome FullStack (CRUD)</h2>
          <hr />

          <BrowserRouter>
            <Routes>
              <Route path="/" element={ <ProductList /> } />
              <Route path="/add" element={<CreateProduct /> } />
              <Route path="/edit/:id" element={<EditProduct /> } />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
