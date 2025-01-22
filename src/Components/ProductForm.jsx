import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";  // Import React Quill
import "react-quill/dist/quill.snow.css";  // Import React Quill styles
import { uploadImage } from "../services/imageUpload";

const Post = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState(""); // Content will be handled by React Quill
  const [selectedCategory, setSelectedCategory] = useState("");
  const [thumbnail, setThumbnail] = useState(""); // Store the thumbnail URL or base64 string
  const [categories, setCategories] = useState([]); // Store categories fetched from the API

  // Fetch categories when the component mounts
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/categories`);
        const data = await response.json();
        setCategories(data); // Assuming the categories are returned as an array
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  // Handle file change (for thumbnail upload)
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      uploadImage(file);

      // Replace with your server's file upload endpoint
      fetch(`${import.meta.env.VITE_BASE_URL}/upload`, {
        method: "POST",
        body: uploadImage,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            setThumbnail(data.files.url); // Use the URL returned from the server
          } else {
            alert("Failed to upload thumbnail");
          }
        })
        .catch((error) => {
          console.error("Error uploading file:", error);
          alert("Error uploading file");
        });
    }
  };

  // Handle form submission
  const handleSubmit = async () => {
    if (!title || !content || !selectedCategory || !thumbnail) {
      alert("Please fill all fields.");
      return;
    }

    const postData = {
      title,
      content, // Content is now handled by React Quill
      category_ids: [selectedCategory], // Selected category in array
      thumbnail, // Thumbnail URL or base64 string
    };

    const token = localStorage.getItem("authToken");

    if (!token) {
      alert("No token found. Please log in.");
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/blogs`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`, // Add Authorization header with token
        },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Blog posted successfully:", result);
        alert("Blog posted successfully!");
        setTitle("");
        setContent("");
        setSelectedCategory("");
        setThumbnail(""); // Reset thumbnail after submission
      } else {
        console.error("Failed to post blog:", response.statusText);
        alert("Failed to post blog. Please try again.");
      }
    } catch (error) {
      console.error("Error posting blog:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="post-form-container">
      <h2>Create a New Post</h2>

      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter post title"
        />
      </div>

      <div>
        <label htmlFor="content">Content:</label>
        <ReactQuill
          value={content}
          onChange={setContent} // Update content with React Quill's editor value
          modules={{
            toolbar: [
              [{ header: "1" }, { header: "2" }, { font: [] }],
              [{ list: "ordered" }, { list: "bullet" }],
              ["bold", "italic", "underline"],
              ["link", "image"],
              [{ align: [] }],
              ["clean"],
            ],
          }}
          formats={[
            "header", "font", "list", "bold", "italic", "underline", "link", "image", "align", "clean",
          ]}
        />
      </div>

      <div>
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="" disabled>
            Select a category
          </option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="thumbnail">Thumbnail:</label>
        <input
          type="file"
          id="thumbnail"
          accept="image/*"
          onChange={handleFileChange}
        />
        {thumbnail && <img src={thumbnail} alt="Thumbnail preview" />}
      </div>

      <button onClick={handleSubmit}>Post Blog</button>
    </div>
  );
};

export default Post;
