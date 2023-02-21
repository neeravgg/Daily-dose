import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
//components
import Header from "./components/Header";
import Articles from "./components/Articles";
import Login from "./components/Menu/login";
import Contactus from "./components/Menu/Contactus";
import Aboutus from "./components/Menu/Aboutus"
function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route exact path='/' element={<Articles />} />
          <Route path='/login' element={<Login />} />
          <Route path='/contact' element={<Contactus />} />
          <Route path='/About' element={<Aboutus />} />
          <Route path='*' element={<Navigate to='/' replace={true} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
