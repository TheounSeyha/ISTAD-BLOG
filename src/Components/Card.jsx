import { useState } from "react"; // Import useState for state management
import { Link } from "react-router-dom"; // Import Link from react-router-dom

export default function CardProduct({
  title,
  content,
  author,
  profileImage,
  categories,
  tumtail,
  id,
}) {
  // State to track whether the blog is liked
  const [isLiked, setIsLiked] = useState(false);

  // Toggle the like state
  const handleLikeClick = () => {
    setIsLiked((prevState) => !prevState);
  };

  return (
    <div className="group relative block overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Blog Image */}
      <img
        src={
          tumtail ||
          "https://images.unsplash.com/photo-1628202926206-c63a34b1618f?q=80&w=2574&auto=format&fit=crop"
        }
        alt={title || "Blog post image"}
        className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72 rounded-t-lg"
      />

      {/* Content Section */}
      <div className="relative border border-gray-100 bg-white p-6">
        {/* Author and Profile */}
        <div className="flex items-center mb-4">
          <img
            src={profileImage || "/image/user.png"}
            alt={author || "Author"}
            className="w-8 h-8 rounded-full mr-4"
          />
          <span className="text-sm font-semibold text-gray-800">
            {author ||
              "https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3407.jpg?w=360"}
          </span>
        </div>

        {/* Blog Title */}
        <h3 className="mt-1.5 text-lg font-medium text-gray-900 line-clamp-1">
          {title || "Default Blog Title"}
        </h3>

        {/* Blog Description */}
        <p className="mt-1.5 line-clamp-3 text-gray-700">
          {content || "Default blog content description"}
        </p>

        {/* Categories Section */}
        <div className="flex flex-wrap gap-2 text-sm text-blue-500 mb-4">
          {categories?.map((category) => (
            <span
              key={category.name}
              className="inline-block bg-blue-100 text-blue-600 px-2 py-1 rounded-full"
            >
              #{category.name}
            </span>
          ))}
        </div>

        {/* Footer with "Read More" and "Like" button */}
        <div className="flex justify-between items-center mt-4">
          {/* Read More Button */}
          <Link
            to={`/blog/${id}`} // Use Link for navigation
            className="text-blue-600 font-medium hover:text-blue-800"
          >
            Read more &rarr;
          </Link>

          {/* Like Button */}
          <button
            onClick={handleLikeClick} // Handle the like toggle
            className="flex items-center text-gray-900 transition hover:text-red-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={isLiked ? "currentColor" : "none"} // Change fill based on like status
              viewBox="0 0 24 24"
              stroke="currentColor"
              className={`w-6 h-6 ${
                isLiked ? "text-red-600" : "text-gray-900"
              }`} // Apply color change based on like status
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              />
            </svg>
            <span className={`ml-2 ${isLiked ? "text-red-600" : ""}`}>
              {isLiked ? "Liked" : "Like"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
