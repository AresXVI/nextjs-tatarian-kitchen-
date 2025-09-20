"use server";

import { signIn } from "@/auth/auth";
import { log } from "console";
import { redirect } from "next/dist/server/api-utils";

export async function singWithCredentials( email: string, password: string ) {
    try {
        await signIn("credentials", {
            email,
            password,
            redirect: false
        });

    return;
    } catch (error) {
        console.error("Ошибка авторизации:", error);
        throw error;
        
    }
}