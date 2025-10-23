import { Outlet } from "react-router-dom";
import Navbar from "../../components/NavBar/Navbar";
import Footer from "../../components/Auth/footer";

function HomePage() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer></Footer>
    </>
  );
}

export default HomePage;
