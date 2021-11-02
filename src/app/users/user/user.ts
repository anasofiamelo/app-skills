export interface User {
    id: number;
    user: string;
    nome: string;
    senha: string;
    email: string;
    admin: boolean;
    createdAt: number;
    updatedAt: number;
}