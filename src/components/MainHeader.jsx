import React, { useState } from "react";
import { MdMessage, MdPostAdd } from "react-icons/md";
import classes from "./MainHeader.module.css";
import Modal from "./Modal";
import NewPost from "./NewPost";

function MainHeader({ onAddPost }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleAddPost = (postData) => {
    onAddPost(postData);
    closeModal();
  };

  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        React Poster
      </h1>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <NewPost
            onSubmit={handleAddPost}
            onClose={closeModal}
          />
        </Modal>
      )}
      <button className={classes.button} onClick={openModal}>
        <MdPostAdd size={18} />
        New Post
      </button>
    </header>
  );
}

export default MainHeader;