import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Header from "./Shared/Header/Header";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/home" element={<Home></Home>}/>
      </Routes>
    </div>
  );
}

export default App;
