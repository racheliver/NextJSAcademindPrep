import React from "react";
import Posts from "./Posts";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";
import { MdPostAdd } from "react-icons/md";

export const ListPosts = ({ posts, onUpdatePost, onOpenEditModal, onCloseEditModal, editingPostId, isLoading }) => {
  return (
    <ul className={classes.posts}>
      {!isLoading && posts.length > 0 && (
        posts.map((post) => (
          <li key={post.id}>
            {editingPostId === post.id && (
              <Modal onClose={onCloseEditModal}>
                <NewPost
                  id={post.id}
                  initialAuthor={post.author}
                  initialBody={post.body}
                  onSubmit={(updates) => {
                    onUpdatePost(post.id, updates);
                    onCloseEditModal();
                  }}
                  onClose={onCloseEditModal}
                />
              </Modal>
            )}
            <Posts {...post} />
            <button
              className={classes.button}
              onClick={() => onOpenEditModal(post.id)}
            >
              <MdPostAdd size={18} />
              Edit Post
            </button>
          </li>
        ))
      ) } 
      {!isLoading && posts.length < 0 && (
        <p>No posts available</p>
      )}
      {isLoading && (
        <p>Loading...</p>
      )}
    </ul>
  );
};