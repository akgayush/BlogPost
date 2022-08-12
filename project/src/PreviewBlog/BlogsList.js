import { useHistory } from "react-router-dom";
import "./BlogsList.css";
const BlogsList = (props) => {
  const history = useHistory();
  const handleClickOnCard = (blog) => {
    history.push(`/blog/${blog.id}`);
  };
  const reactions = ["👍", "🎉", "❤️", "🚀", "👀"];
  return (
    <div>
      <h3>Posts</h3>
      <ul>
        {props.blogs.map((blog) => (
          <li key={blog.id}>
            <b>{blog.title}</b>
            <p>{`by ${blog.author} ${blog.time}`}</p>
            <div id="content">{blog.blog}</div>
            <div id="reactions">
              {reactions.map((reaction, index) => (
                <button id={index} style={{ display: "inline" }} key={index}>
                  {reaction} - {blog.reactions[index]}
                </button>
              ))}
            </div>
            <button onClick={() => handleClickOnCard(blog)}>View Post</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default BlogsList;
