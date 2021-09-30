import logo from './logo.svg';
import './App.css';
import Main from "./Main";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Main />
      <Link to="/signup">
        <button variant="outlined">
          Sign up
        </button>
      </Link>
    </div>
  );
}

export default App;
