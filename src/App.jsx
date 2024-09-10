import React, { useState } from "react";
import { ListPosts } from "./components/ListPosts";
import MainHeader from "./components/MainHeader";

const INITIAL_POSTS = [
  { id: "1", author: "racheli", body: "body1" },
  { id: "2", author: "max", body: "body2" },
];

function App() {
  const [posts, setPosts] = useState(INITIAL_POSTS);
  const [editingPostId, setEditingPostId] = useState(null);

  const addPost = (newPost) => {
    setPosts((prevPosts) => [...prevPosts, { ...newPost, id: Date.now().toString() }]);
  };

  const updatePost = (id, updates) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id ? { ...post, ...updates } : post
      )
    );
  };

  const openEditModal = (id) => setEditingPostId(id);
  const closeEditModal = () => setEditingPostId(null);

  return (
    <>
      <MainHeader onAddPost={addPost} />
      <main>
      <div id="modal"></div>
        <ListPosts
          posts={posts}
          onUpdatePost={updatePost}
          onOpenEditModal={openEditModal}
          onCloseEditModal={closeEditModal}
          editingPostId={editingPostId}
        />
      </main>
    </>
  );
}

export default App;