import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Database } from 'lucide-react';
import { AuthForm } from '../components/AuthForm';
import type { RegisterCredentials } from '../types/auth';

export default function Register() {
  const navigate = useNavigate();

  const handleRegister = async (data: RegisterCredentials) => {
    try {
      // TODO: Implement actual registration logic
      console.log('Register data:', data);
      navigate('/login');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <Database className="h-12 w-12 text-blue-600" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
            Sign in
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <AuthForm mode="register" onSubmit={handleRegister} />
        </div>
      </div>
    </div>
  );
}