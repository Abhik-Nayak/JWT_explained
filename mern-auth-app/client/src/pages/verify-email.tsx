import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loader from '../components/Loader'; // optional loader
import { toast } from 'react-hot-toast';

const VerifyEmailPage = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const token = searchParams.get('token');

    useEffect(() => {
        const verifyEmail = async () => {
            if (!token) {
                toast.error('Verification token not found.');
                setLoading(false);
                return;
            }

            try {
                const res = await axios.post('/auth/verify-email', { token });
                toast.success(res.data.message || 'Email verified successfully!');
                navigate('/login'); // or dashboard
            } catch (error: any) {
                console.error(error);
                toast.error(error?.response?.data?.message || 'Verification failed.');
            } finally {
                setLoading(false);
            }
        };

        verifyEmail();
    }, [token, navigate]);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <Loader />
            </div>
        );
    }

    return null;
};

export default VerifyEmailPage;
