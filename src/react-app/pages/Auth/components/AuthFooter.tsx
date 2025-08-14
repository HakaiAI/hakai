import React from 'react';
import { useNavigate, useLocation } from 'react-router';

export const AuthFooter: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isRegisterPage = location.pathname === '/register';

  return (
    <div className="flex flex-col items-center space-y-2 mx-auto">
      <div className="text-sm text-center">
        {isRegisterPage ? (
          <>
            <span className="text-gray-600">Already have an account? </span>
            <button
              type="button"
              className="text-primary hover:underline"
              onClick={() => navigate('/login')}
            >
              Sign in
            </button>
          </>
        ) : (
          <>
            <span className="text-gray-600">Don't have an account? </span>
            <button
              type="button"
              className="text-primary hover:underline"
              onClick={() => navigate('/register')}
            >
              Sign up
            </button>
          </>
        )}
      </div>
      <div className="text-sm text-center">
        <button
          type="button"
          className="text-primary hover:underline"
          onClick={() => navigate('/terms')}
        >
          Terms of Service
        </button>
        <span className="text-gray-600 mx-2">•</span>
        <button
          type="button"
          className="text-primary hover:underline"
          onClick={() => navigate('/privacy')}
        >
          Privacy Policy
        </button>
      </div>
    </div>
  );
};