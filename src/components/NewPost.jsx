import React, { useState } from 'react';
import classes from './NewPost.module.css';

function NewPost({ id, initialAuthor = '', initialBody = '', onSubmit, onClose }) {
  const [author, setAuthor] = useState(initialAuthor);
  const [body, setBody] = useState(initialBody);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ id, author, body });
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea
          id="body"
          required
          rows={3}
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onClose}>Cancel</button>
        <button type="submit">Submit</button>
      </p>
    </form>
  );
}

export default NewPost;