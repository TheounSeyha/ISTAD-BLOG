
import { useState, useEffect } from "react";
import { BASE_URL } from "./services/api";

import CardProduct from "./Components/Card";

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from API
  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const response = await fetch(`${BASE_URL}/blogs`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        if (Array.isArray(result.blogs)) {
          setProducts(result.blogs);
        } else {
          setError("Data is not in the expected array format");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllProducts();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-600 text-lg dark:bg-gray-600 dark:text-white">
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

  return (
    
    <section className="bg-gray-50 py-6 dark:bg-gray-500">
      {/* Grid layout for product cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto mr-10 ml-10">
        {products.map((data) => (
          <CardProduct
            key={data.id}
            title={data.title}
            content={data.content}
            author={data.author?.username}
            profileImage={data.author?.profileImage}
            categories={data.categories}
            tumtail={data.tumtail}
            id={data.id}
            date={data.createdAt}
          />
        ))}
      </div>
    </section>
  );
}

export default App;
