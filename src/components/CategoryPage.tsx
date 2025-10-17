import { useParams } from "react-router-dom";
import categories from "../components/CategoriesData"; // your category array

export default function CategoryPage() {
  const { category } = useParams(); // <-- use the param name from App.tsx
  const foundCategory = categories.find((cat) => cat.slug === category);

  if (!foundCategory) return <p>Category not found</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{foundCategory.name}</h1>
      <img
        src={foundCategory.image}
        alt={foundCategory.name}
        className="my-4 w-full max-w-md"
      />
      <p>{foundCategory.description}</p>
    </div>
  );
}
