
import Link from "next/link";
import { notFound } from "next/navigation";

const recipes = [
  {
    id: "1",
    name: "Spaghetti Bolognese",
    ingredients: [
      "200g spaghetti",
      "200g ground beef",
      "1 cup tomato sauce",
      "1 onion",
      "2 cloves garlic",
    ],
    instructions: [
      "Boil spaghetti until tender.",
      "Cook onion, garlic, and ground beef in a pan.",
      "Add tomato sauce and simmer for 15 minutes.",
      "Serve the sauce over the spaghetti.",
    ],
  },
  {
    id: "2",
    name: "Chicken Stir Fry",
    ingredients: [
      "200g chicken breast",
      "1 bell pepper",
      "1 carrot",
      "2 tablespoons soy sauce",
    ],
    instructions: [
      "Cut chicken and vegetables into small pieces.",
      "Cook chicken in a hot pan.",
      "Add vegetables and stir fry until tender.",
      "Add soy sauce and serve.",
    ],
  },
  {
    id: "3",
    name: "Pancakes",
    ingredients: [
      "1 cup flour",
      "1 cup milk",
      "1 egg",
      "1 tablespoon sugar",
    ],
    instructions: [
      "Mix all ingredients into a smooth batter.",
      "Heat a lightly greased pan.",
      "Pour batter into the pan.",
      "Cook both sides until golden brown.",
    ],
  },
];

export function generateStaticParams() {
  return recipes.map((recipe) => ({
    id: recipe.id,
  }));
}

export default async function RecipeDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const recipe = recipes.find((item) => item.id === id);

  if (!recipe) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl p-6">
      <Link
        href="/recipes"
        className="text-blue-400 hover:underline"
      >
        ← Back to Recipes
      </Link>

      <h1 className="mt-6 mb-6 text-3xl font-bold">
        {recipe.name}
      </h1>

      <h2 className="mb-3 text-2xl font-semibold">
        Ingredients
      </h2>

      <ul className="mb-8 list-disc pl-6">
        {recipe.ingredients.map((ingredient) => (
          <li key={ingredient} className="mb-2">
            {ingredient}
          </li>
        ))}
      </ul>

      <h2 className="mb-3 text-2xl font-semibold">
        Instructions
      </h2>

      <ol className="list-decimal pl-6">
        {recipe.instructions.map((instruction, index) => (
          <li key={index} className="mb-3">
            {instruction}
          </li>
        ))}
      </ol>
    </main>
  );
}
