import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axiosInstance from '../api/axios';

const SetNewPassword: React.FC = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleReset = async () => {
    if (!password || password.length < 6) {
      alert('Password must be at least 6 characters.');
      return;
    }

    try {
      setLoading(true);
      await axiosInstance.post(`/api/auth/reset-password/${token}`, { password });
      alert('Password reset successful!');
      navigate('/login'); // redirect to login page after success
    } catch (err: any) {
      alert(err?.response?.data?.message || 'Failed to reset password.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Set New Password</h2>

        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
          New Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          placeholder="Enter new password"
        />

        <button
          onClick={handleReset}
          disabled={loading || password.length < 6}
          className={`w-full py-2 px-4 rounded-md text-white font-semibold transition-colors duration-200 ${
            password.length >= 6 && !loading
              ? 'bg-blue-600 hover:bg-blue-700'
              : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          {loading ? 'Resetting...' : 'Reset Password'}
        </button>
      </div>
    </div>
  );
};

export default SetNewPassword;
