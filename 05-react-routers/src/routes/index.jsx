import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Dashboard from "../pages/dashboard/Dashboard";
import Profile from "../pages/dashboard/Profile";
import Setting from "../pages/dashboard/Setting";
import Main from "../pages/profile/Main";
import Fan from "../pages/profile/Fan";
import Follow from "../pages/profile/Follow";
import Book from "../pages/Book";
import Login from "../pages/Login";
import Layout from "../layout/Layout";
import BlogList from "../conponents/BlofList";
import BlogDetails from "../conponents/BlogDetails";

const AppRouters = () => {
  return (
    <Routes>

      <Route path="/login" element={<Login />} />

      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="blog" element={<BlogList />} />
        <Route path="about" element={<About />} />
        <Route path="book/:bookId" element={<Book />} />
        <Route path="blog/:blogIndex" element={<BlogDetails />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />}>
            <Route index element={<Main />} />
            <Route path="main" element={<Main />} />
            <Route path="fans" element={<Fan />} />
            <Route path="follow" element={<Follow />} />
          </Route>
          <Route path="setting" element={<Setting />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouters;
