import { Route, Routes } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from "./page/Home";
import Login from "./page/login";
import Register from "./page/Register";
function App() {
  return (
    <>

        <Routes>
          <Route element={<MainLayout/>}>
          <Route path="/" element={<Home />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
    
    </>
  );
}

export default App;
