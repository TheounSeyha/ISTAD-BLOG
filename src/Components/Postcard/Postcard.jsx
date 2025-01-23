import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function PostCard({}) {
  const [posts, setPosts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postToDelete, setPostToDelete] = useState(null);
  const storedUserId = localStorage.getItem("userId");
  console.log(storedUserId);
  useEffect(() => {
    if (!storedUserId) return;
    fetch(`https://blog-api.devnerd.store/blogs?userId=${!storedUserId}`)
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch posts");
        return response.json();
      })
      .then((data) => {
        if (data.blogs && Array.isArray(data.blogs)) {
          setPosts(data.blogs);
        } else {
          console.error("API response does not contain a valid blogs array:", data);
          setPosts([]);
        }
      })
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);  
  
  const openDeleteModal = (post) => {
    setIsModalOpen(true);
    setPostToDelete(post);
  };

  const confirmDelete = () => {
    fetch(`https://blog-api.devnerd.store/blogs/${postToDelete.id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) throw new Error("Failed to delete post");
        setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postToDelete.id));
        setIsModalOpen(false);
        setPostToDelete(null);
      })
      .catch((error) => console.error("Error deleting post:", error));
  };

  const cancelDelete = () => {
    setIsModalOpen(false);
    setPostToDelete(null);
  };

  return (
    <div className="container">
      <div className="posts">
        {Array.isArray(posts) && posts.length > 0 ? (
          posts.map((post) => (
            <div
              key={post.id}
              className="group bg-white border border-gray-400 p-4 rounded-md flex items-center justify-between hover:shadow-md"
            >
              <div className="flex items-center">
                <div className="bg-gray-300 w-12 h-12 rounded-md flex items-center justify-center">
                  <span className="text-2xl font-semibold text-gray-700"></span>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg">{post.title || "Untitled Post"}</h3>
                  <span
                    className="text-green-500"
                  >
                    Public
                  </span>
                  <span className="text-gray-500"> {post.date || "No Date"}</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-end gap-2 text-gray-600 text-sm">
                  <NavLink to={`/edit/${post.id}`} className="hover:text-[#ff7f50]">
                    <span>Edit</span>
                  </NavLink>
                  <button
                    className="hover:text-[#ff7f50]"
                    onClick={() => openDeleteModal(post)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No posts available.</p>
        )}
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-lg w-1/3">
            <h3 className="text-lg font-semibold">Are you sure you want to delete this post?</h3>
            <div className="mt-4 flex justify-between">
              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Yes, Delete
              </button>
              <button
                onClick={cancelDelete}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
