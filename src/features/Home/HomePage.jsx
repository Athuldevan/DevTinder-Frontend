import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../../components/NavBar/Navbar";
import Footer from "../../components/Auth/Footer";
import { useEffect } from "react";
import { axiosInstance } from "../../lib/axios";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../Auth/slices/AuthSlice";

function HomePage() {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await axiosInstance.get("/profile");
        console.log(data);
        dispatch(loginUser(data));
      } catch (err) {
        if (err.response?.status === 401) {
          navigate("/login");
          return;
        }
        console.error("Profile fetch error:", err);
      }
    };

    if (!user) {
      fetchProfile();
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
