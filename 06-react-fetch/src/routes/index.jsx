import React from "react";
import { Routes, Route } from "react-router-dom";
import PostList from "../pages/PostList";
import PostDetail from "../pages/PostDetial";
import CreatePost from "../pages/CreatePost";
import EditPost from "../pages/EditPost";
import Movies from "../pages/Movies";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PostList />} />
      <Route path="/create" element={<CreatePost />} />
      <Route path="/post/:id" element={<PostDetail />} />
      <Route path="/edit/:id" element={<EditPost />} />
      <Route path="/movies" element={<Movies />} />
    </Routes>
  );
};

export default AppRoutes;
