import React, { useState, useEffect } from 'react';
import axiosInstance from '../api/axios';

const ResetPasswordRequest: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(email));
  }, [email]);

  const passwordReset = async () => {
    try {
      setLoading(true);
      const data: any = await axiosInstance.post('/auth/request-password-reset', { email });
      alert(data?.response?.data?.message || 'Reset link sent!');
    } catch (err: any) {
      alert(err?.response?.data?.message || 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Reset Password</h2>

        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email address
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          placeholder="you@example.com"
        />

        <button
          onClick={passwordReset}
          disabled={!isEmailValid || loading}
          className={`w-full py-2 px-4 rounded-md text-white font-semibold transition-colors duration-200 ${
            isEmailValid && !loading
              ? 'bg-blue-600 hover:bg-blue-700'
              : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          {loading ? 'Sending...' : 'Send Reset Link'}
        </button>
      </div>
    </div>
  );
};

export default ResetPasswordRequest;
