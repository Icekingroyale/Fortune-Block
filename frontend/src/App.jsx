import "./App.css";
import {
  // BrowserRouter,
  // Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Homepage from "./components/layouts/Homepage";
import MainLayout from "./components/layouts/MainLayout";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import SignIn from "./components/pages/SignIn";
import Register from "./components/pages/Register";
import PageNotFound from "./components/pages/PageNotFound";
import ResetPass from "./components/pages/ResetPass";
import Dashboard from "./components/layouts/Dashboard";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Homepage />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="/forgot-password" element={<ResetPass />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
