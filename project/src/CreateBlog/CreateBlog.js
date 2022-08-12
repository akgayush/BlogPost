import "./CreateBlog.css";
import UploadImage from "./UploadImage";
import { useState } from "react";
import Button from "../UI/Button";
function CreateBlog(props) {
  const [image, setImage] = useState();
  const onSaveHandler = (img) => {
    setImage(img);
  };
  const [title, setTitle] = useState("");
  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const [author, setAuthor] = useState("Dan Brown");
  const authorChangeHandler = (e) => {
    setAuthor(e.target.value);
  };
  const [theme, setTheme] = useState([
    { name: "Adventure", isSelected: false },
    { name: "Comedy", isSelected: false },
    { name: "Thriller", isSelected: false },
    { name: "Science Fiction", isSelected: false },
    { name: "Romance", isSelected: false },
    { name: "Miscellaneous", isSelected: false },
  ]);
  const onThemeHandler = (e) => {
    const updatedTheme = [...theme];
    theme[e.target.id].isSelected = !theme[e.target.id].isSelected;
    setTheme(updatedTheme);
  };

  const [reader, setReader] = useState();
  const onReaderHandler = (e) => {
    setReader(e.target.value);
  };
  const [blog, setBlog] = useState();
  const onblogChangeHandler = (e) => {
    setBlog(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      title: title,
      author: author,
      theme: theme,
      reader: reader,
      blog: blog,
      image: image,
      reactions: [0, 0, 0, 0, 0],
      time: Date().toLocaleString().substring(0, 24),
    };
    setTitle("");
    setAuthor("");
    setBlog("");
    setReader();
    setImage();
    props.onBlogSave(data);
  };
  return (
    <form onSubmit={submitHandler}>
      <h3>
        <u>Add a New Post</u>
      </h3>
      <label>Title :</label>
      <br></br>
      <input
        type="text"
        required
        onChange={titleChangeHandler}
        maxLength="30"
        value={title}
      />
      <br></br>
      <label>Author :</label>
      <br />
      <select onChange={authorChangeHandler} value={author}>
        <option value="Dan Brown">Dan Brown</option>
        <option value="JK Rowling">JK Rowling</option>
        <option value="Stephan King">Stephan King</option>
      </select>
      <br></br>
      <label>Theme :</label>
      {theme.map((t, index) => (
        <div style={{ display: "inline" }} id={index} key={index}>
          <input
            type="checkbox"
            name={t.name}
            value={t.name}
            onChange={onThemeHandler}
            id={index}
          />
          {t.name}
        </div>
      ))}
      <br></br>
      <label>Level : </label>
      <input
        type="radio"
        value="Beginner"
        name="fav_language"
        onChange={onReaderHandler}
        required
      />
      Beginner
      <input
        type="radio"
        value="Intermediate"
        name="fav_language"
        onChange={onReaderHandler}
      />
      Intermediate
      <input
        type="radio"
        value="Advanced"
        name="fav_language"
        onChange={onReaderHandler}
      />
      Advanced
      <br></br>
      <textarea
        placeholder="Write your blog here!"
        onChange={onblogChangeHandler}
        required
        value={blog}
      ></textarea>
      <br></br>
      <div id="image">
        <UploadImage saveFiles={onSaveHandler} required></UploadImage>
      </div>
      <br></br>
      <div id="button">
        <Button type="submit">Save</Button>
      </div>
      <br></br>
    </form>
  );
}

export default CreateBlog;
