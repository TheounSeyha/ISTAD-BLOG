export async function uploadImage(files) {
    const formData = new FormData();
    formData.append("files", files);
  
    try {
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/upload`, {
        method: "POST",
        headers: {
            // "Content-Type": "multipart/form-data", // No need to set Content-Type with FormData, it's automatically set
        },
        body: formData, // Ensure the formData is passed in the request body
      });
  
      if (!res.ok) { // Check if the response was successful
        const errorData = await res.json(); // Parse error response
        throw new Error(errorData.message || "Failed to upload image");
      }
  
      const data = await res.json();
      return data; // Return the parsed JSON response
    } catch (error) {
      console.error("Error uploading image:", error.message);
      throw error; // Re-throw the error to handle in the calling function
    }
}
