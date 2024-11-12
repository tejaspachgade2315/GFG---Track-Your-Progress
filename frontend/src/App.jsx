import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import GFGUsers from "./components/GFGUsers";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            Home
          </Route>
          <Route path="/gfg-users" element={<GFGUsers />}>
            GFG Users
          </Route>
        </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App;
