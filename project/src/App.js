import { useState } from "react";
import "./App.css";
import CreateBlog from "./CreateBlog/CreateBlog";
import BlogsList from "./PreviewBlog/BlogsList";
import React from "react";
import EditBlog from "./EditBlog/EditBlog";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import SingleBlog from "./PreviewBlog/SingleBlog";

function App() {
  const [blogs, setBlogs] = useState([]);
  const blogsSaveHandler = (data) => {
    data.id = blogs.length + 1;
    setBlogs([data, ...blogs]);
    console.log("created", data.id);
  };
  const getUpdatedBlog = (data) => {
    //todo: to be optimised
    let updatedBlogs = [...blogs];
    updatedBlogs[blogs.length - data.id] = data;
    setBlogs(updatedBlogs);
  };
  const reactionHandler = (r, id) => {
    const updatedBlogs = [...blogs];
    updatedBlogs[blogs.length - id].reactions = r;
    setBlogs(updatedBlogs);
  };
  return (
    <div className="App">
      <header>
        <h1>
          <u>My Blog App</u>
        </h1>
        Posts
      </header>
      <Router>
        <Switch>
          <Route path="/" exact>
            <CreateBlog onBlogSave={blogsSaveHandler} />
            {blogs.length === 0 ? (
              <h2>No Blogs Available</h2>
            ) : (
              <BlogsList blogs={blogs}></BlogsList>
            )}
          </Route>
          <Route path="/blog/edit/:id" exact>
            <EditBlog blogs={blogs} getUpdatedBlog={getUpdatedBlog}></EditBlog>
          </Route>
          <Route path="/blog/:id" exact>
            <SingleBlog blogs={blogs} setReaction={reactionHandler} />
          </Route>
          <Redirect to="/"></Redirect>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
