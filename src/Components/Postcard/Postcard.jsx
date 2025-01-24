import React, { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";

export default function PostCard() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [authorId, setAuthorId] = useState("");
  const [categories, setCategories] = useState([]);
  const [token, setToken] = useState(null);

  const deleteBlog = async (blogId) => {
    const token = localStorage.getItem("authToken"); // Replace with the correct token retrieval method

    if (!token) {
      console.error("No token found");
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/blogs/${blogId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to delete blog: ${response.statusText}`);
      }

      // Successfully deleted, now update the state
      setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== blogId));
      console.log("Blog deleted successfully");
    } catch (err) {
      console.error("Error deleting blog:", err);
    }
  };

  // fetchCategories();
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}/categories`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );
        if (!response.ok) throw new Error("Failed to fetch categories");
        const data = await response.json();
        const categoryIds = data.map((category) => category.id);
        setCategories(categoryIds);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchCategories();
  }, []);

  // fetchProfile();
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);
        const storedToken = localStorage.getItem("authToken");
        console.log("Stored token:", storedToken);

        if (!storedToken) {
          throw new Error("No authentication token found");
        }

        setToken(storedToken);

        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}/users/profile`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${storedToken}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch profile");
        }

        const data = await response.json();
        console.log("Profile data:", data);

        // Ensure authorId is a string
        const authorId = String(data?.profile?.id || "");
        console.log("Author ID:", authorId);
        setAuthorId(authorId);
        setLoading(false);
      } catch (err) {
        console.error("Error:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  // fetchAllBlogs();
  useEffect(() => {
    if (!authorId || !categories || categories.length === 0) {
      console.error("Author ID or categories are missing");
      return;
    }

    const fetchAllBlogs = async () => {
      try {
        const allBlogs = [];

        // Process one category at a time
        for (let i = 0; i < categories.length; i++) {
          const category = categories.slice(i, i + 1)[0]; // Slice one item at a time
          console.log(`Processing category: ${category}`);

          // Fetch blogs for the current category
          const data = await fetchBlogs(authorId, category);

          // Log and append the fetched blogs
          console.log(`Blogs for category ${category}:`, data);

          // Check if data contains blogs array and map over it
          if (
            data.blogs &&
            Array.isArray(data.blogs) &&
            data.blogs.length > 0
          ) {
            allBlogs.push(...data.blogs);
          }
        }

        // Log combined blogs and update state
        console.log("All combined blogs:", allBlogs);
        setBlogs(allBlogs);
      } catch (err) {
        console.error("Error fetching all blogs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAllBlogs();
  }, [authorId, categories]);

  const fetchBlogs = async (authorId, categoryId) => {
    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_BASE_URL
        }/blogs?author_id=${authorId}&category_id=${categoryId}`
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch blogs: ${response.statusText}`);
      }

      const data = await response.json();
      console.log("Fetched blogs for category:", categoryId, data);

      return data; // Return the entire response object
    } catch (err) {
      console.error("Error fetching blogs:", err);
      return { blogs: [] }; // Return empty array if there's an error
    }
  };

  if (loading) return <p>Loading blogs...</p>;
  if (error) return <p>Error: {error}</p>;

  // Inside your JSX, render the blogs like this:
  return (
    <div className="container">
      {loading ? (
        <p>Loading blogs...</p>
      ) : blogs.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        <div className="posts">
          {blogs.map((post) => (
            <div
              key={post.id}
              className="group bg-white border border-gray-400 p-4 rounded-md flex items-center justify-between hover:shadow-md"
            >
              <div className="flex items-center">
                <div className="bg-gray-300 w-12 h-12 rounded-md flex items-center justify-center">
                  <img
                    src={post.thumbnail || "https://default-thumbnail-url.png"}
                    alt="thumbnail"
                    className="object-cover w-12 h-12"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg">
                    {post.title || "Untitled Post"}
                  </h3>
                  <p className="text-sm text-gray-700 mt-2 line-clamp-2">
                    {post.content || "No content available."}
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-end gap-2 text-gray-600 text-sm">
                  <button
                    className="hover:text-[#ff7f50]"
                    onClick={() => deleteBlog(post.id)}
                  >
                    <span>Delete</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
