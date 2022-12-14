import { Route, Routes,useLocation } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Home from "./pages/Home/Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Footer from "./components/Footer";
import Services from "./pages/services/Services";
import Sidebar from "./components/Sidebar";
import ContactUs from "./pages/contact/ContactUs";
import FrontendTech from "./pages/Frontend/FrontendTech";
 
const App = () => {
  
  const location=useLocation();
  return (
    <>
     {location.pathname!=="/" && <Sidebar background="#0d0f3c"/>}
    
   
      <Routes>  
               
          <Route path="/" element={<Landing />} />
          <Route path="/services" element={<Services/> } />
          <Route path="/contact-us" element={<ContactUs/> } />
          <Route path="/frontend/:id" element={<FrontendTech/> } /> 
          
      </Routes>

      {location.pathname!=="/" && <Footer/>}
      
    </>
  );
};

export default App;
