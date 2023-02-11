import "./App.css";
import ScrollToTop from "../src/components/scrollToTop";
import LoginPage from "../src/pages/LoginPage";
import BlogPage from "../src/pages/BlogPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/privateRoute/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/blog"
          element={
            <PrivateRoute>
              <BlogPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
