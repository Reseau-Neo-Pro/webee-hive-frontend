"use client";
import axios from 'axios';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/router';
import Input from '@/components/input/Input';

// Interface décrivant la structure de l'état initial
interface Credentials {
    email: string;
    password: string;
}

// Initialisation de l'état initial du formulaire
const initialCredentials: Credentials = {
    email: '',
    password: '',
};

// Composant principal de la page de connexion
export default function LoginPage() {
    const [credentials, setCredentials] = useState(initialCredentials);
    const router = useRouter();

    // Fonction qui permet de mettre à jour dynamiquement les valeurs de 'credentials' en fonction des saisies de l'utilisateur dans les champs de formulaire.
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    // Fonction pour gérer la soumission du formulaire et l'authentification
    const signIn = async (credentials: Credentials) => {
        try {
            // Envoyer une requête HTTP au serveur pour vérifier les identifiants
            const response = await axios.post('/api/login', credentials);

            if (response.status === 200) {
                return { ok: true };
            } else {
                console.error('Authentication failed');
                return { error: 'Wrong Credentials' };
            }
        } catch (error) {
            console.error('Authentication error:', error);
            return { error: 'Authentication Error' };
        }
    };

    // Fonction qui est appelée lors de la soumission du formulaire
    const onSubmit = async (event: FormEvent) => {
        event.preventDefault();

        // Appel de la fonction signIn pour l'authentification
        const callback = await signIn(credentials);

        // Gestion de la réponse du backend
        if (callback?.ok) {
            router.push('/'); // Redirection vers la page d'accueil en cas de succès
        } else {
            console.error(callback?.error);
            // Gérez l'erreur d'authentification comme vous le souhaitez en cas d'échec
        }
    };

    return (
        // Formulaire de connexion avec des champs email, mot de passe et bouton "Sign in"
        <form className="text-center" onSubmit={onSubmit}>
            <div className="flex flex-col justify-center h-[450px] w-[350px] mx-auto gap-2">
                <Input
                    placeholder="Email"
                    name="email"
                    id="email"
                    type="email"
                    onChange={handleChange}
                    value={credentials.email}
                />
                <Input
                    placeholder="Password"
                    name="password"
                    id="password"
                    type="password"
                    onChange={handleChange}
                    value={credentials.password}
                />
                <button
                    type="submit"
                    className="px-6 py-3 flex items-center justify-center bg-blue-700 border-none text-white hover:bg-blue-500 focus:border focus border-gray-200 transition ease-out"
                >
                    Sign in
                </button>
            </div>
            <div>
                You already have an account? <a href="/register">Sign up</a>{' '}
            </div>
        </form>
    );
}