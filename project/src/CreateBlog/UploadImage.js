function UploadImage(props) {
  const onChangeHandler = (e) => {
    const [file] = e.target.files;
    console.log(file);
    props.saveFiles(URL.createObjectURL(file));
  };
  return (
    <input
      required={props.required}
      type="file"
      id="file"
      accept="image/*"
      multiple
      onChange={onChangeHandler}
    />
  );
}

export default UploadImage;
