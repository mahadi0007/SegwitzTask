import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setBlog, selectBlog, resetData } from "../redux/blogSlice";

function BlogPage() {
  const dispatch = useDispatch();
  const posts = useSelector(selectBlog);

  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setBlog({ id: Date.now(), content }));
    setContent("");
  };

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("pass");
    dispatch(resetData());
    navigate("/");
  };

  return (
    <>
      <div className="container">
        <div className="text-end mt-2">
          <button
            type="button"
            className="btn btn-danger btn-block"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
        <div className="mt-4">
          <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
              <textarea
                value={content}
                onChange={handleContentChange}
                type="text"
                className="form-control"
                placeholder="Write your blog..."
                rows="5"
              />
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-secondary btn-block">
                Post
              </button>
            </div>
          </form>
          <hr />
          <h3>Blogs</h3>
          <div>
            <ul>
              {posts &&
                posts.map((post) => (
                  <li key={post.id}>
                    <h6>{post.content}</h6>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogPage;
