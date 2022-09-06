import 'materialize-css/dist/css/materialize.min.css';
import 'bulma/css/bulma.min.css';
import "./App.css";

import { NavBar } from "./components/NavBar.js";
import { Footer } from "./components/Footer.js";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Footer />
      
    </div>
  );
}

export default App;
