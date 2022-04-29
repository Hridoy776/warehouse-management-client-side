import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Header from "./Shared/Header/Header";
import Home from "./Pages/Home/Home";
import Footer from "./Shared/Header/Footer/Footer";
import Login from "./Pages/Login/Login";
import Inventory from "./Pages/Inventory/Inventory";
import Notfound from "./Pages/NotFound/Notfound";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/home" element={<Home></Home>}/>
        <Route path="/login" element={<Login></Login>}/>
        <Route path="/inventory/:id" element={<Inventory></Inventory>}/>
        <Route path="*" element={<Notfound></Notfound>}/>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
