import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { BASE_URL } from "../services/api";

const ProductDetails = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams(); // Dynamic ID from the route
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`${BASE_URL}/blogs${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product data");
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-600 text-lg">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen text-red-600 font-bold text-lg">
        Error: {error}
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-600 text-lg">
        No product found
      </div>
    );
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <img
        src={data.thumbnail || "/image/default.png"}
        alt={data.title}
        className="w-full rounded-lg mb-4"
      />
      <h1 className="text-2xl font-bold mb-2">{data.title}</h1>
      <p className="text-gray-700 mb-4">{data.description}</p>
      <p className="text-lg font-semibold text-blue-500">
        Price: ${data.price}
      </p>
    </div>
  );
};

export default ProductDetails;
