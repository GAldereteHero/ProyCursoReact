import "materialize-css/dist/css/materialize.min.css";
import "bulma/css/bulma.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartProvider from "./Context/CartContext";

import { NavBar } from "./components/Navbar/Navbar.js";
import { ItemListContainer } from "./components/Containers/ItemListContainer/ItemListContainer.js";
import { SpacerBlock } from "./components/Containers/SpacerBlock/SpacerBlock.js";
import { Footer } from "./components/Footer/Footer.js";
import { ItemDetailContainer } from "./components/Containers/ItemDetailContainer/ItemDetailContainer.js";
import { CartContainer } from "./components/Containers/CartContainer/CartContainer";

function App() {
  return (
    <div className="App">
      <Router>
        <CartProvider>
          <NavBar />
          <SpacerBlock props={5} /> {/*Props: Specify the space in rem*/}
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:nameCategory" element={<ItemListContainer />} />
            <Route path="/product/:IdProduct" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartContainer />} />
          </Routes>
        </CartProvider>
      </Router>
      <SpacerBlock props={5} />
      <Footer />
    </div>
  );
}

export default App;
