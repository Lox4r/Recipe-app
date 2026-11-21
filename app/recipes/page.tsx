
import Link from "next/link";

const recipes = [
  {
    id: 1,
    name: "Spaghetti Bolognese",
    description: "Classic pasta with a rich tomato and meat sauce.",
    time: "40 minutes",
  },
  {
    id: 2,
    name: "Chicken Stir Fry",
    description: "Chicken and vegetables cooked in a savory sauce.",
    time: "25 minutes",
  },
  {
    id: 3,
    name: "Pancakes",
    description: "Fluffy homemade pancakes for breakfast.",
    time: "20 minutes",
  },
];

export default function RecipesPage() {
  return (
    <main className="mx-auto max-w-5xl p-6">
      <h1 className="mb-6 text-3xl font-bold">
        Recipe Collection
      </h1>

      <p className="mb-8 text-gray-600">
        Discover delicious recipes to try at home.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        {recipes.map((recipe) => (
          <article
            key={recipe.id}
            className="rounded-lg border p-5 shadow-sm"
          >
            <h2 className="mb-2 text-xl font-semibold">
              {recipe.name}
            </h2>

            <p className="mb-8 text-gray-600">
              {recipe.description}
            </p>

            <p className="mb-4 text-sm">
              Preparation: {recipe.time}
            </p>

            <Link
              href={`/recipes/${recipe.id}`}
              className="font-medium text-blue-600 hover:underline"
            >
              View Recipe
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
