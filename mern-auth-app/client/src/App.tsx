import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedRoute from './components/ProtectedRoute';
import { useAppDispatch } from './store/hooks';
import { loadUser } from './store/authSlice';
import { useEffect } from 'react';
import VerifyEmailPage from './pages/verify-email';
import ResetPasswordRequest from './pages/ResetPasswordRequest';
import SetNewPassword from './pages/SetNewPassword';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify-email" element={<VerifyEmailPage />} />
        <Route path="/requestPasswordReset" element={<ResetPasswordRequest />} />
        <Route path="/reset-password/:token" element={<SetNewPassword />} />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
