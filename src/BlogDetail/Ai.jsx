const Ai = () => {
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
        "Cascading Style Sheets (CSS) is a cornerstone technology used in web development to control the visual presentation of HTML documents. It enables developers to separate content from design, allowing for clean and maintainable code. CSS defines how elements like text, images, and layouts are displayed on a web page, including styles such as color, font, spacing, and alignment.",
      reactions: { likes: 120, comments: 3 },
      comments: [
        {
          id: 1,
          user: {
            avatar:
              "https://yt3.ggpht.com/ytc/AIdro_n68ziQLwlP2zE2AoW58ea3RWol98GNssqM9F9i2ODfKsPj4j3sBfuxm6Wo8-ppOXb3Jw=s88-c-k-c0x00ffffff-no-rj",
            name: "Theoun Penha",
          },
          text: "Please add your content here. Keep it short and simple. And smile :)",
        },
      ],
    },
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
        "Cascading Style Sheets (CSS) is a cornerstone technology used in web development to control the visual presentation of HTML documents. It enables developers to separate content from design, allowing for clean and maintainable code. CSS defines how elements like text, images, and layouts are displayed on a web page, including styles such as color, font, spacing, and alignment.",
      reactions: { likes: 120, comments: 3 },
      comments: [
        {
          id: 1,
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

  return (
    <div className="w-full max-w-[40rem] mx-auto">
      {posts.map((post) => (
        <div key={post.id} className="bg-white p-6 rounded-lg shadow-lg mb-6">
          {/* Post Header */}
          <div className="flex items-center space-x-4 mb-4">
            <img
              src={post.user.avatar}
              alt="User Avatar"
              className="w-12 h-12 rounded-full"
            />
            <div className="max-w-[calc(100%-4rem)]">
              <h1 className="text-xl font-bold hover:bg-gray-100 truncate">
                {post.user.name}
              </h1>
              <p className="text-gray-500 truncate">{post.user.username}</p>
            </div>
          </div>

          {/* Image and Content */}
          <img
            src={post.image}
            alt="Post Banner"
            className="w-full rounded-lg mb-4"
          />
          <p className="text-gray-700 text-sm">{post.content}</p>

          {/* Reactions */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex space-x-4">
              <button type="button">❤️</button>
              <span>{post.reactions.likes}</span>
              <span>💬 {post.reactions.comments} Comments</span>
            </div>
          </div>

          {/* Comments Section */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold">
              {post.reactions.comments} Comments
            </h3>
            <div className="mt-4 space-y-4">
              {post.comments.map((comment) => (
                <div
                  key={comment.id}
                  className="flex space-x-4 hover:bg-gray-100"
                >
                  <img
                    src={comment.user.avatar}
                    alt="User Avatar"
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="flex-1 max-w-[calc(100%-4rem)]">
                    <h4 className="font-bold truncate">{comment.user.name}</h4>
                    <p className="text-gray-700 text-sm">{comment.text}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Comment Input */}
            <div className="mt-6">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Write a comment..."
                  className="flex-1 p-3 border border-gray-300 rounded-lg"
                />
                <button
                  type="button"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Ai;
