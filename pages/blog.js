import React, { useState, useEffect } from "react";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (posts.length === 0) {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => setPosts(data));
    }
  }, [posts]);

  return (
    <>
      <h1 className="text-3xl font-bold underline mb-4">Blog</h1>
      {posts.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className="blog-container">
          {posts.map((post) => (
            <div
              key={post.id}
              className="blog-post bg-white shadow-md p-6 mb-6 rounded-md"
            >
              <h1 className="text-2xl font-bold text-gray-800 mb-2">
                {post.id}
              </h1>
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {post.title}
              </h2>
              <p className="text-gray-600">{post.body}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
