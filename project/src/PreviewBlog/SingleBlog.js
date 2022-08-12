import "./SingleBlog.css";
import { useParams, Link, useHistory } from "react-router-dom";
import Button from "../UI/Button";
import { useState } from "react";
const SingleBlog = (props) => {
  const history = useHistory();

  let { id } = useParams();
  const blogList = props.blogs.filter((blog) => {
    return blog.id.toString() === id.toString();
  });

  const blog = blogList[0];
  let theme = "";
  blog.theme.forEach((element) => {
    if (element.isSelected) {
      theme += element.name + " ";
    }
  });
  const [reactionsCount, updateReactionCount] = useState(blog.reactions);
  const reactions = ["👍", "🎉", "❤️", "🚀", "👀"];
  const reactionChangeHandler = (e) => {
    const updated = [...reactionsCount];
    updated[e.target.id]++;
    updateReactionCount(updated);
    props.setReaction(updated, id);
  };
  const onEditHandler = () => {
    history.push(`/blog/edit/${id}`);
  };

  return (
    <div className="SingleBlog">
      <div style={{ textAlign: "left" }}>
        <Link to="/" style={{ color: "red" }}>
          Go Back
        </Link>
      </div>
      <div>
        <b>{blog.title}</b>
      </div>
      <div className="text">{`by ${blog.author} at ${blog.time}`}</div>

      <div>
        <b>Reader</b>- {blog.reader}
      </div>
      <div>
        <b>Theme</b>-{theme}
      </div>
      <div>
        <b>Content</b>- {blog.blog}
      </div>
      <div id="img">
        <img src={blog.image} width={100} height={100} alt={blog.title} />
      </div>
      {reactions.map((reaction, index) => (
        <button
          onClick={reactionChangeHandler}
          id={index}
          style={{ display: "inline" }}
          key={index}
        >
          {reaction} - {reactionsCount[index]}
        </button>
      ))}
      <br />
      <Button onClick={onEditHandler}>Edit</Button>
    </div>
  );
};
export default SingleBlog;
