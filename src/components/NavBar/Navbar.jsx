import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { axiosInstance } from "../../lib/axios";
import { logout } from "../../features/Auth/slices/AuthSlice";

function Navbar() {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const naviagte = useNavigate();
  // Logout functionality
  const handleLogout = async () => {
    try {
      const data = await axiosInstance.post("/auth/logout", {});

      if (data) dispatch(logout());

      return naviagte(`/login`);
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <>
      <div className="navbar bg-base-300 shadow-sm">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">
            DevTinder
          </Link>
        </div>

        {/* REQUESTS */}
        <div className="flex justify-center items-center gap-2">
          <Link to="/requests">Requests</Link>
          <Link to="/login">Login</Link>
        </div>

        {user && (
          <div className="flex gap-8">
            <div className="dropdown dropdown-end mx-8 p-2">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full flex items-center justify-end">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user.photoUrl}
                  />
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/profile" className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li>
                  <Link to="/connections">Connections</Link>
                </li>
                <li>
                  <Link to="/Premium">Premium</Link>
                </li>
                <li>
                  <Link onClick={handleLogout}>Logout</Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
