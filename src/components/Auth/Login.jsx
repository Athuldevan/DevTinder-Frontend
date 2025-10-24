import { useState } from "react";
import { axiosInstance } from "../../lib/axios";
import { useDispatch } from "react-redux";
import { login } from "../../features/Auth/slices/AuthSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("soman@gmail.com");
  const [password, setPassword] = useState("soman@123");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleLogin() {
    try {
      const { data } = await axiosInstance.post("/auth/login", {
        emailId: email,
        password,
      });
      dispatch(login(data.data));
      navigate("/feed");
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <>
      <div className="hero bg-base-100 min-h-screen p-4">
        <div className="hero-content flex-col lg:flex-row-reverse p-2">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-2">
            <div className="card-body p-7">
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Email</legend>
                <input
                  type="text"
                  value={email}
                  className="input input-xl"
                  placeholder="Type here"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Password</legend>
                <input
                  type="password"
                  value={password}
                  className="input input-xl"
                  placeholder="Type here"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </fieldset>

              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button
                onClick={handleLogin}
                className="btn btn-success bg-green-700 btn-block btn-active"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
