import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { lazy, Suspense } from "react";
import ProfilePage from "./features/Profile/ProfilePage";
import ConnectionsPage from "./features/connections/ConnectionsPage";
import RequestPage from "./features/Requests/Pages/RequestPage";
import SignupPage from "./features/Auth/SignupPage";
const HomePage = lazy(() => import("./features/Home/HomePage"));
const Loading = lazy(() => import("./components/ui/Loading"));
const LoginPage = lazy(() => import("./features/Auth/LoginPage"));
const FeedPage = lazy(() => import("./features/feed/pages/FeedPage"));

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />}>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/feed" element={<FeedPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/connections" element={<ConnectionsPage />} />
              <Route path="/requests" element={<RequestPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
