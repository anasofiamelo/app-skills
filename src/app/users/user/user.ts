

export interface User {
    id: number;
    user: string;
    nome: string;
    senha: string;
    email: string;
    admin: boolean;
    profilePic: string,
    profileDesc: string,
    createdAt: number;
    updatedAt: number;
}