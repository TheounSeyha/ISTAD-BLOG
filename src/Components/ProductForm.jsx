"use client";
import React, { useState, useEffect } from "react";
import { FileInput, Label, Textarea, Select } from "flowbite-react";
import { uploadImage } from "../services/imageUpload";
import { useNavigate } from "react-router";

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
        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}/categories`
        );
        const data = await response.json();
        setCategories(data); // Assuming the categories are returned as an array
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  // Handle file change (for thumbnail upload)
  const handleFileChange = async (e) => {
    const file = e.target.files[0]; // Get the first file from input

    if (file) {
      try {
        const response = await uploadImage(file); // Pass file, not array of files

        if (response && response.files && response.files.length > 0) {
          const uploadedFileUrl = response.files[0].url; // Extract URL of uploaded image
          setThumbnail(uploadedFileUrl); // Update thumbnail state
          console.log("Image uploaded successfully:", uploadedFileUrl);
        } else {
          throw new Error("No files returned from the upload API.");
        }
      } catch (error) {
        console.error("Failed to upload image:", error.message);
        alert("Image upload failed. Please try again.");
      }
    }
  };

const navigator = useNavigate();

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
          Authorization: `Bearer ${token}`, // Add Authorization header with token
        },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Blog posted successfully:", result);
        alert("Blog posted successfully!");
        navigator("/")
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
    <section className="post-form w-[90%] mx-auto mt-10 items-center">
      <div className="post-form-container gap-5 flex flex-col">
        <h2 className="text-2xl">Create a New Post</h2>
        {/* Title */}
        <div className="max-w-md">
          <div className="block mb-2">
            <label htmlFor="title">Title:</label>
          </div>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter post title"
            className="rounded-md border-gray-300"
          />
        </div>
        {/* Content */}
        <div className="max-w-md">
          <div className="mb-2 block">
            <Label htmlFor="title" value="Content" />
          </div>
          <Textarea
            id="comment"
            placeholder="Enter post content"
            required
            rows={4}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        {/* Category selector */}
        <div className="max-w-md">
          <div className="mb-2 block">
            <Label htmlFor="category" value="Category" />
          </div>
          <Select
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            required
          >
            <option value="" disabled>
              Select a category
            </option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </Select>
        </div>
        {/* Blog Thumbnail */}
        <div className="max-w-md">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="file-upload" value="Upload file" />
            </div>
            <FileInput id="file-upload" onChange={handleFileChange} />
            {thumbnail && <img src={thumbnail} alt="Thumbnail preview" />}
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className="bg-[#FF7F50] w-[100px] h-[40px] text-white rounded-md"
        >
          Post Blog
        </button>
      </div>
    </section>
  );
};

export default Post;
