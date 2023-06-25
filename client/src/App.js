import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Policy from "./pages/Policy/Policy";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Register from "./pages/Auth/Register/Register";
import Login from "./pages/Auth/Login/Login";
import Dashboard from "./pages/User/Dashboard/Dashboard";
import PrivateRoutes from "./components/Routes/private";
import AdminRoutes from "./components/Routes/Admin";
import Admin from "./pages/Admin/Dashboard/Admin";
import Category from "./pages/Category/Category";
import CreateCategory from "./pages/Admin/CreateCategory/CreateCategory";
import CreateProduct from "./pages/Admin/CreateProduct/CreateProduct";
import Users from "./pages/Admin/Users/Users";
import Orders from "./pages/User/Orders/Orders";
import Profile from "./pages/User/Profile/Profile";
import Products from "./pages/Admin/Products/Products";
import UpdateProduct from "./pages/Admin/UpdateProduct/UpdateProduct";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<PrivateRoutes />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/orders" element={<Orders />} />
          <Route path="user/profile" element={<Profile />} />
        </Route>
        <Route path="/dashboard" element={<AdminRoutes />}>
          <Route path="admin" element={<Admin />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/product/:slug" element={<UpdateProduct />} />
          <Route path="admin/products" element={<Products />} />
          <Route path="admin/users" element={<Users />} />
        </Route>
        <Route path="/category" element={<Category />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
