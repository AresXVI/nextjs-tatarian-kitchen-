"use client"

import RecipeCart from "@/components/common/recipe-cart";
import { useRecipeStore  } from "@/store/recipe.store";
import { Button } from "@heroui/react";
import Link from "next/link";

export default function Home() {

  const { recipes, isLoading, error } = useRecipeStore();

  return (
    <>
      <div className="flex w-full justify-center items-center mb-4">
        <Link href={"/recipes/new"}>
          <Button color="primary">Добавить рецепт</Button>
        </Link>
      </div>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      {isLoading && <p>Загрузка...</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recipes.map((recipe) => (
          <RecipeCart key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </>
  );
}
