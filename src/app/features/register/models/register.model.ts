export interface RegisterRequest {
    name: string;
    email: string;
}

export interface RegisterResponse {
    id: number;
    name: string;
    email: string;
}

export interface RegisterAdaptedResponse {
    code: number;
    fullName: string;
    contact: string;
}