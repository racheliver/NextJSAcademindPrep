import { useState } from 'react';
import classes from './NewPost.module.css';

function NewPost(props) {
  const [inputName, setInputName] = useState(props.name || '');
  const [inputBody, setInputBody] = useState(props.body || '');

  const changeInfo = (e) => {
    e.preventDefault();
    props.onChangeNameHandler(props.id,inputName);
    props.onChangeBodyHandler(props.id,inputBody);

    props.onClose();
  };

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor={props.id}>Text</label>
        <textarea
          onChange={(e) => setInputBody(e.target.value)} 
          id={props.id}
          required
          rows={3}
          value={inputBody}  
        />
      </p>
      <p>
        <label htmlFor={props.id}>Your name</label>
        <input
          value={inputName}  
          onChange={(e) => setInputName(e.target.value)} 
          type="text"
          id={props.id}
          required
        />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={props.onClose}>Cancel</button>
        <button id={props.id} onClick={changeInfo}>Submit</button>
      </p>
    </form>
  );
}


export default NewPost;