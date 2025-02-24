export interface User {
  id: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
  name: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials extends LoginCredentials {
  name: string;
  confirmPassword: string;
}