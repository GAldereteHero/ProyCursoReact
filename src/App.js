import "materialize-css/dist/css/materialize.min.css";
import "bulma/css/bulma.min.css";
import "./App.css";

import { NavBar } from "./components/Navbar/Navbar.js";
import { Footer } from "./components/Footer/Footer.js";
import { ItemListContainer } from "./components/Containers/ItemListContainer/ItemListContainer.js";
import { SpacerBlock } from "./components/Containers/SpacerBlock/SpacerBlock.js";
import { Item } from "./components/Item/Item";

function App() {
  const msj = "Los alimentos órganicos de la tierra a tu mesa";
  return (
    <div className="App">
      <NavBar />
      <SpacerBlock props={5} /> {/*Props: Specify the space in rem*/}
      <ItemListContainer greeting={msj} />
      <SpacerBlock props={5} /> {/*Props: Specify the space in rem*/}
      <Footer />
    </div>
  );
}

export default App;
