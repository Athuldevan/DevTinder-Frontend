import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { lazy, Suspense } from "react";
const HomePage = lazy(() => import("./features/Home/HomePage"));
const Loading = lazy(() => import("./components/ui/Loading"));
const LoginPage = lazy(() => import("./features/Auth/LoginPage"));
const FeedPgae = lazy(() => import("./features/feed/pages/FeedPgae"));
function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />}>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<p>Signup Page</p>} />
              <Route path="/feed" element={<FeedPgae />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
