import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../../components/NavBar/Navbar";
import Footer from "../../components/Auth/footer";
import { useEffect } from "react";
import { axiosInstance } from "../../lib/axios";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../Auth/slices/AuthSlice";

function HomePage() {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    async function viewProfile() {
      try {
        const { data } = await axiosInstance.get("/profile");
        dispatch(loginUser(data));
      } catch (err) {
        if (err.status === 401 || err.status === 400) {
          return navigate("/login");
        }
        console.log(err);
      }
    }
    if (!user) {
      viewProfile();
    }
  }, [dispatch, navigate, user]);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default HomePage;
