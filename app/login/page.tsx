"use client";
import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

// Interface décrivant la structure de l'état initial
interface InitialStateProps {
    email: string;
    password: string;
}

// Initialisation de l'état initial du formulaire
const initialState: InitialStateProps = {
    email: "",
    password: "",
};

// Composant principal de la page de connexion
export default function LoginPage() {
    // Utilisation du hook useState pour gérer l'état du formulaire
    const [state, setState] = useState(initialState);

    // Utilisation du hook useRouter pour la gestion de la navigation
    const router = useRouter();

    // Fonction qui gère les changements dans les champs du formulaire
    const handleChange = (e: any) => {
        setState({ ...state, [e.target.name]: e.target.value });
    };

    // Fonction qui gère la soumission du formulaire
    const onSubmit = (event: FormEvent) => {
        event.preventDefault();

        // Fonction asynchrone pour effectuer la demande d'authentification
        const signIn = async (credentials: { email: string; password: string }) => {
            try {
                // Envoi d'une requête POST au backend avec les informations d'identification
                const response = await fetch("/api/auth", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(credentials),
                });

                // Vérification de la réponse du backend
                if (response.ok) {
                    return { ok: true }; // Authentification réussie
                } else {
                    console.error("Authentication failed");
                    return { error: "Wrong Credentials" }; // Authentification échouée
                }
            } catch (error) {
                console.error("Authentication error:", error);
                return { error: "Authentication Error" }; // Erreur lors de l'authentification
            }
        };

        // Fonction qui est appelée lors de la soumission du formulaire
        const onSubmit = async (event: FormEvent) => {
            event.preventDefault();

            // Appel de la fonction signIn pour l'authentification
            const callback = await signIn(state);

            // Gestion de la réponse du backend
            if (callback?.ok) {
                router.push("/"); // Redirection vers la page d'accueil en cas de succès
            } else {
                console.error(callback?.error);
                // Gérez l'erreur d'authentification comme vous le souhaitez en cas d'échec
            }
        };

        return (
            // Formulaire de connexion avec des champs email, mot de passe et bouton "Sign in"
            <form className="text-center" onSubmit={onSubmit}>
                <div
                    className="flex flex-col justify-center h-[450px] w-[350px] mx-auto gap-2
        "
                >
                    <input
                        placeholder="Email"
                        name="email"
                        id="email"
                        type="email"
                        onChange={handleChange}
                        value={state.email}
                    />
                    <input
                        placeholder="Password"
                        name="password"
                        id="password"
                        type="password"
                        onChange={handleChange}
                        value={state.password}
                    />
                    <button
                        type="submit"
                        className="px-6 py-3 flex items-center justify-center bg-blue-700 border-none text-white hover:bg-blue-500 focus:border focus border-gray-200 transition ease-out"
                    >
                        Sign in
                    </button>
                </div>
                <div>
                    You already have an account ? <a href="/register">Sign up</a>{" "}
                </div>
            </form>
        );
    };
}
