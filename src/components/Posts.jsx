import React from 'react';
import classes from './Posts.module.css';


export default function Posts(props) {

  return (
    <div className={classes.post} id={props.id}>
        <p className={classes.author}>{props.author}</p>
        <p className={classes.body}>{props.body}</p>
    </div>
  )
}
