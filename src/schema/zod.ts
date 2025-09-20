import z, { object, string, number } from "zod"

export const signInSchema = object({
    email: string({ error: "Email is required" })
        .min(1, "Email is required")
        .email("Invalid email"),
    password: string({ error: "Password is required" })
        .min(1, "Password is required")
        .min(6, "Password must be more than 8 characters")
        .max(32, "Password must be less than 32 characters"),
});

export const ingredientSchema = object({
    name: string().min(1, "Название обязательно"),
    category: z.enum([
        "VEGETABLES",
        "FRUITS",
        "MEAT",
        "DAIRY",
        "SPICES",
        "OTHER"
    ]),
    unit: z.enum([ "GRAMS", "KILOGRAMS", "LITERS", "MILLILITERS", "PIECES"]),
    pricePerUnit: number({ message: "Цена должна быть числом" })
        .min(0, "Цена должна быть положительный")
        .nullable(),
    description: z.string().optional()
    
});