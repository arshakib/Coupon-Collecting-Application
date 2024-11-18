import { Outlet } from "react-router-dom";
import Nav from "./Componenet/Navber/Nav";
import Footer from "./Componenet/Footer/Footer";

function App() {
  return (
    <>
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
