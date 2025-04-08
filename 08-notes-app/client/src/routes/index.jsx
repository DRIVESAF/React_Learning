import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Home from "@/pages/Home";
import Notes from "../pages/Notes";
import Categories from "../pages/Categories";
import CategoryNotes from "../pages/CategoryNotes";
import Note from "../pages/Note";
import CreateNote from "../pages/CreateNote";
import EditNote from "../pages/EditNote";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register></Register>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/categories" element={<Categories></Categories>}></Route>
      <Route
        path="/notes/categories/:categoryId"
        element={<CategoryNotes></CategoryNotes>}
      ></Route>
      <Route path="/notes" element={<Notes></Notes>}></Route>
      <Route path="/notes/:id" element={<Note></Note>}></Route>
      <Route path="/create-note" element={<CreateNote></CreateNote>}></Route>
      <Route path="/notes/edit/:noteId" element={<EditNote></EditNote>}></Route>
    </Routes>
  );
};
export default AppRoutes;
