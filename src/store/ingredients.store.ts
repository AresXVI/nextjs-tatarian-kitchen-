import { createIngredient, deleteIngredients, getIngredients } from "@/actions/ingerdient";
import { IIngredient } from "@/types/ingredients";
import { create } from "zustand";

interface IngredientStore {
    ingredients: IIngredient[];
    isLoading: boolean;
    error: string | null;
    loadIngredients: () => Promise<void>;
    addIngredient: (formData: FormData) => Promise<void>;
    removeIngredient: (id: string) => Promise<void>
};

export const useIngredientStore = create<IngredientStore>((set) => ({
    ingredients: [],
    isLoading: false,
    error: null,
    loadIngredients: async () => {
        set({ isLoading: true, error: null });
        
        try {
            const result = await getIngredients();

            if (result.success) {
                set({ ingredients: result.ingredients, isLoading: false });
            }else {
                set({ error: result.error, isLoading: false });
            }
        } catch (error) {
            console.log('error:', error);
            set({ error: "ОШибка при загрузке ингредиентов", isLoading: false })
        }
    },
    addIngredient: async (formData: FormData) => {
        set({ isLoading: true, error: null });

        try {
            const result = await createIngredient(formData);

            if (result.success) {
                set((state) => ({
                    ingredients: [ ...state.ingredients, result.ingredient ],
                    isLoading: false
                }));
            } else {
                set({ error: result.error, isLoading: false });
            }
        } catch (error) {
            console.error("error", error);
            set({ error: "Ошибка при добавлении ингредиента", isLoading: false});
        }
    },
    removeIngredient: async (id: string) => {
        set({ isLoading: true, error: null });

        try {
            const result = await deleteIngredients(id);

            if (result.success) {
                set((state) => ({
                    ingredients: state.ingredients.filter(
                        (ingredient) => ingredient.id !==id
                    ),
                    isLoading: false
                })) 
            } else {
                set({ error: result.error, isLoading: false });
            }
        } catch (error) {
            console.log("error", error);
            set({ error: "Ошибка при удалении ингредиента", isLoading: false });
        }
    }
}));