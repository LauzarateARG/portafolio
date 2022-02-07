import { Routes ,Route} from "react-router-dom"

//components import
import Nav from "./Components/NavBar/index"
import Contain from "./Components/Contain/index";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={ <Contain />} />
      </Routes>
    </div>
  );
}

export default App;
