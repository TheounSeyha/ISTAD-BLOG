import Card from "../Card";
import posts from "./data"; // Import the posts array
function DynamicCard() {
  return (
    <div className="bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        New Information & Technologies
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {posts.map((post) => (
          <Card key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
}

export default DynamicCard;
