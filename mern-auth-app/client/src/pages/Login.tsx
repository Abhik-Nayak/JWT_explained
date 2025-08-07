import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { loginUser } from '../store/authSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { loading, error, user } = useAppSelector(state => state.auth);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginUser(formData));
  };


  // Navigate to dashboard after successful login
  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user]);

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="email" name="email" placeholder="Email" className="input" onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" className="input" onChange={handleChange} />
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      <button className="bg-green-600 text-white px-4 py-2 rounded" onClick={() => navigate('/requestPasswordReset')}>
        Password Reset</button>
    </div>
  );
};

export default Login;
