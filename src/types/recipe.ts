import { IIngredient } from "./ingredients"

export interface IRecipeIngredients {
    id: string,
    ingredientId: string,
    quantity: number,
    ingredient: IIngredient
}

export interface IRecipe {
    id: string,
    name: string,
    description: string,
    imageUrl?: string | null,
    ingredients: IRecipeIngredients[];
}