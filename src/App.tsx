import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./features/Home/HomePage";
import LoginPage from "./features/Auth/LoginPage";
import FeedPgae from "./features/feed/pages/FeedPgae";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<p>Signup Page</p>} />
            <Route path="/feed" element={<FeedPgae />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
