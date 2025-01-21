import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function PostCard() {
  const [posts, setPosts] = useState([]); // State to hold posts
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postToDelete, setPostToDelete] = useState(null);

  
  const togglePublicStatus = (id) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id
          ? { ...post, isPublic: !post.isPublic, type: post.isPublic ? "Draft" : "Published" }
          : post
      )
    );
  };

  const openDeleteModal = (post) => {
    setIsModalOpen(true);
    setPostToDelete(post);
  };

  const confirmDelete = () => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postToDelete.id));
    setIsModalOpen(false);
    setPostToDelete(null);
  };

  const cancelDelete = () => {
    setIsModalOpen(false);
    setPostToDelete(null);
  };

  return (
    <div className="container">
      <div className="posts">
        {posts.map((post) => (
          <div
            key={post.id}
            className="group bg-white border border-gray-400 p-4 rounded-md flex items-center justify-between hover:shadow-md"
          >
            <div className="flex items-center">
              <div className="bg-gray-300 w-12 h-12 rounded-md flex items-center justify-center">
                <span className="text-2xl font-semibold text-gray-700">U</span>
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-lg">{post.title}</h3>
                <span
                  className={`${
                    post.isPublic ? "text-green-500" : "text-[#ff7f50]"
                  }`}
                >
                  {post.type}
                </span>
                <span className="text-gray-500"> {post.date}</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-end gap-2 text-gray-600 text-sm">
                <button
                  className="hover:text-[#ff7f50]"
                  onClick={() => togglePublicStatus(post.id)}
                >
                  {post.isPublic ? "Unpublish" : "Publish"}
                </button>
                <NavLink to="" className="hover:text-[#ff7f50]">
                  <span>Edit</span>
                </NavLink>
                <button
                  className="hover:text-[#ff7f50]"
                  onClick={() => openDeleteModal(post)}
                >
                  Delete
                </button>
              </div>
              <div className="flex gap-2 text-gray-600 justify-end">
                {/* Icons here */}
              </div>
            </div>
          </div>
        ))}
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
