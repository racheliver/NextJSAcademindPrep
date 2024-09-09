import { ListPosts } from "./components/ListPosts";
import React, { useState } from "react";
import MainHeader from "./components/MainHeader";

export const POSTINFO = [
  {
    author: "racheli",
    body: "body1",
    id: 1,
  },
  { author: "max", body: "body2", id: 2 },
];

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(null); // Track the post ID instead of boolean
  const [postsInfo, setPostsInfo] = useState(POSTINFO);

  function hideModalHandler() {
    setModalIsVisible(null); // Close the modal by setting it to null
  }

  const openModalHandler = (id) => {
    setModalIsVisible(id); // Open the modal for the post with the given ID
  };

  const onChangeBodyHandler = (id, body1) => {
    setPostsInfo((prevPostsInfo) => {
      const updatedPosts = prevPostsInfo.map((post) =>
        post.id === id ? { ...post, body: body1 } : post
      );
      return updatedPosts;
    });
  };

  const onChangeNameHandler = (id, postName) => {
    setPostsInfo((prevPostsInfo) => {
      const updatedPosts = prevPostsInfo.map((post) =>
        post.id === id ? { ...post, author: postName } : post
      );
      return updatedPosts;
    });
  };

  return (
    <>
      <MainHeader />
      <main>
        <ListPosts
          listposts={postsInfo}
          onChangeNameHandler={onChangeNameHandler}
          onChangeBodyHandler={onChangeBodyHandler}
          onOpenModal={openModalHandler}
          onCloseModal={hideModalHandler}
          modalIsVisible={modalIsVisible} // Pass the ID of the open modal
        />
      </main>
    </>
  );
}

export default App;
