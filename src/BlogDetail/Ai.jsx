import  { useState } from "react";

const Ai = () => {
  const [selectedPostId, setSelectedPostId] = useState(null);

  // Sample data for posts
  const posts = [
    {
      id: 1,
      user: {
        avatar:
          "https://yt3.ggpht.com/ytc/AIdro_n68ziQLwlP2zE2AoW58ea3RWol98GNssqM9F9i2ODfKsPj4j3sBfuxm6Wo8-ppOXb3Jw=s88-c-k-c0x00ffffff-no-rj",
        name: "Cascading Style Sheets",
        username: "@Css",
      },
      image:
        "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
      content:
        "Cascading Style Sheets (CSS) is a cornerstone technology used in web development to control the visual presentation of HTML documents.",
      reactions: { likes: 120, comments: 3 },
      comments: [
        {
          id: 2,
          user: {
            avatar:
              "https://yt3.ggpht.com/ytc/AIdro_n68ziQLwlP2zE2AoW58ea3RWol98GNssqM9F9i2ODfKsPj4j3sBfuxm6Wo8-ppOXb3Jw=s88-c-k-c0x00ffffff-no-rj",
            name: "Theoun Penha",
          },
          text: "Please add your content here. Keep it short and simple. And smile :)",
        },
      ],
    },
  ];

  // Function to handle post selection
  const handleSelectPost = (id) => {
    setSelectedPostId(id);
  };

  // Function to go back to the post list
  const handleBack = () => {
    setSelectedPostId(null);
  };

  // Find the selected post
  const selectedPost = posts.find((post) => post.id === selectedPostId);

  return (
    <div className="w-full max-w-[40rem] mx-auto">
      {/* Show Detail View if a post is selected */}
      {selectedPostId ? (
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <button
            onClick={handleBack}
            className="mb-4 px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
          >
            Back
          </button>
          <div className="flex items-center space-x-4 mb-4">
            <img
              src={selectedPost.user.avatar}
              alt="User Avatar"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h1 className="text-xl font-bold">{selectedPost.user.name}</h1>
              <p className="text-gray-500">{selectedPost.user.username}</p>
            </div>
          </div>
          <img
            src={selectedPost.image}
            alt="Post Banner"
            className="w-full rounded-lg mb-4"
          />
          <p className="text-gray-700">{selectedPost.content}</p>
        </div>
      ) : (
        // Show Post List
        posts.map((post) => (
          <div
            key={post.id}
            className="bg-white p-6 rounded-lg shadow-lg mb-6 cursor-pointer"
            onClick={() => handleSelectPost(post.id)}
          >
            <div className="flex items-center space-x-4 mb-4">
              <img
                src={post.user.avatar}
                alt="User Avatar"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h1 className="text-xl font-bold">{post.user.name}</h1>
                <p className="text-gray-500">{post.user.username}</p>
              </div>
            </div>
            <img
              src={post.image}
              alt="Post Banner"
              className="w-full rounded-lg mb-4"
            />
            <p className="text-gray-700 truncate">{post.content}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Ai;
