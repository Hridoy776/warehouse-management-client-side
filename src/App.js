import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Header from "./Shared/Header/Header";
import Home from "./Pages/Home/Home";
import Footer from "./Shared/Header/Footer/Footer";
import Login from "./Pages/Login/Login";
import Inventory from "./Pages/Inventory/Inventory";
import Notfound from "./Pages/NotFound/Notfound";
import Register from "./Pages/Login/Register/Register";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import ManageInventory from "./Pages/ManageInventory/ManageInventory";
import AddItem from "./Pages/AddItem/AddItem";
import MyItem from "./Pages/MyItem/MyItem";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/home" element={<Home></Home>}/>
        <Route path="/login" element={<Login></Login>}/>
        <Route path="/register" element={<Register></Register>}/>
        <Route path="/inventory/:id" element={<RequireAuth>
          <Inventory></Inventory>
        </RequireAuth>}/>
        <Route path="/manage" element={<RequireAuth>
          <ManageInventory></ManageInventory>
        </RequireAuth>}/>
        <Route path="/additem" element={<RequireAuth>
          <AddItem></AddItem>
        </RequireAuth>}/>
        <Route path="/myitem" element={<RequireAuth>
          <MyItem></MyItem>
        </RequireAuth>}/>
        
        
        <Route path="*" element={<Notfound></Notfound>}/>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
