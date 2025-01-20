import React, { useState } from 'react';

export default function PostCard() {
  const [checkedPosts, setCheckedPosts] = useState([]);
  const posts = [
    { id: 1, title: '(Untitled)', date: 'Jan 4', type: 'Draft' },
  ];


  const handleCheckboxChange = (postId) => {
    setCheckedPosts((prevCheckedPosts) =>
      prevCheckedPosts.includes(postId)
        ? prevCheckedPosts.filter((id) => id !== postId)
        : [...prevCheckedPosts, postId]
    );
  };


  return (
    <div className="container">
      <div className="posts">
        {posts.map((post) => (
          <div key={post.id} className="group bg-white border border-gray-400 p-4 rounded-md flex items-center justify-between hover:shadow-md">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="post-checkbox mr-4"
                onChange={() => handleCheckboxChange(post.id)}
                checked={checkedPosts.includes(post.id)}
              />
              <div className="bg-gray-300 w-12 h-12 rounded-md flex items-center justify-center">
                <span className="text-2xl font-semibold text-gray-700">U</span>
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-lg">{post.title}</h3>
                <span className="text-orange-500">{post.type}</span>
                <span className="text-gray-500"> {post.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}