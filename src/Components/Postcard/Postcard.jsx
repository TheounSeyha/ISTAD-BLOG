import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function PostCard() {
  const [posts, setPosts] = useState([]);
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
                <span className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    width="16"
                    height="16"
                    fill="currentColor"
                  >
                    <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                  </svg>
                  0
                </span>
                <span className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="16"
                    height="16"
                    fill="currentColor"
                  >
                    <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                  </svg>
                  0
                </span>
                <span className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="16"
                    height="16"
                    fill="currentColor"
                  >
                    <path d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c0 0 0 0 0 0s0 0 0 0s0 0 0 0c0 0 0 0 0 0l.3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z" />
                  </svg>
                  0
                </span>
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
