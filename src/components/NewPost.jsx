import classes from './NewPost.module.css';

function NewPost(props) {
  const changeNameHandler = (e) => {
      props.onChangeNameHandler(props.id,e.target.value)
  }

  const changeBodyHandler = (e) => {
    props.onChangeBodyHandler(props.id,e.target.value)
}
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea onChange={changeBodyHandler} id={props.id} required rows={3} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input onChange={changeNameHandler} type="text" id={props.id} required />
      </p>
    </form>
  );
}

export default NewPost;