import React, { useState, useEffect } from "react";
import { ListPosts } from "./components/ListPosts";
import MainHeader from "./components/MainHeader";

const INITIAL_POSTS = [];

function App() {
  const [posts, setPosts] = useState(INITIAL_POSTS);
  const [editingPostId, setEditingPostId] = useState(null);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("http://localhost:8080/posts");
      const responseResult = await response.json();
      setPosts(responseResult.posts);
    };
    fetchPosts();
  }, []);
  const addPost = (newPost) => {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(newPost),
      headers: { "Content-Type": "application/json" },
    });
    setPosts((prevPosts) => [
      ...prevPosts,
      { ...newPost, id: Date.now().toString() },
    ]);
  };

  const updatePost = (id, updates) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => (post.id === id ? { ...post, ...updates } : post))
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
