import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./features/Home/HomePage";
import LoginPage from "./features/Auth/LoginPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<p>Signup Page</p>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
