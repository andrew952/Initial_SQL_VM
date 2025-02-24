import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Database } from 'lucide-react';
import { AuthForm } from '../components/AuthForm';
import type { LoginCredentials } from '../types/auth';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = async (data: LoginCredentials) => {
    try {
      // TODO: Implement actual login logic
      console.log('Login data:', data);
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <Database className="h-12 w-12 text-blue-600" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to SQL VM Manager
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Or{' '}
          <Link to="/register" className="font-medium text-blue-600 hover:text-blue-500">
            create a new account
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <AuthForm mode="login" onSubmit={handleLogin} />
        </div>
      </div>
    </div>
  );
}